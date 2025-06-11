"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { studentsData } from "@/lib/studentsData"
import { gradesData } from "@/lib/hardcoded-grades"

export default function ResultsPage() {
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const studentId = searchParams.get("studentId") || ""

  const studentName = studentsData[studentId as keyof typeof studentsData]
  const studentGradeRecord = gradesData[studentId as keyof typeof gradesData]
  const grades = studentGradeRecord || []

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer1)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-700 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">FCAIH - نظام النتائج الإلكترونى</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto py-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-16 w-16 animate-spin mx-auto mb-6 text-blue-700" />
            <h2 className="text-2xl font-medium mb-2">جاري تحميل النتيجة...</h2>
            <p className="text-muted-foreground text-lg">يرجى الانتظار بينما نقوم بجلب بياناتك من النظام</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>جاري التحقق من الرقم الجامعى: {studentId}</p>
            </div>
          </div>
        </main>
        <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
          <p>© 2024 كلية الحاسبات والذكاء الاصطناعى - جامعة حلوان</p>
        </footer>
      </div>
    )
  }

  if (!studentName) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-700 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">FCAIH - نظام النتائج الإلكترونى</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto py-12 px-4">
          <div className="max-w-lg mx-auto">
            <Card className="shadow-lg border-red-200">
              <CardHeader className="text-center bg-red-50">
                <CardTitle className="text-2xl text-red-700">خطأ فى البيانات</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <p className="text-lg mb-4">الرقم الجامعى غير صحيح أو غير موجود</p>
                <p className="text-sm text-gray-600">يرجى التأكد من صحة الرقم الجامعى والمحاولة مرة أخرى</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/">
                  <Button variant="outline">العودة للصفحة الرئيسية</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
        <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
          <p>© 2024 كلية الحاسبات والذكاء الاصطناعى - جامعة حلوان</p>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">FCAIH - نظام النتائج الإلكترونى</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="bg-green-50 border-b">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-2" />
                <CardTitle className="text-2xl text-green-700">نتيجة الطالب</CardTitle>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">الرقم الجامعى: {studentId}</p>
                <p className="text-xl font-bold text-blue-700 mt-2">{studentName}</p>
                <p className="text-sm text-gray-600 mt-1">الفرقة الثانية - الفصل الدراسى الثاني 2024/2025</p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-3 text-right">المادة</th>
                      <th className="border border-gray-300 p-3 text-center">الدرجة</th>
                      <th className="border border-gray-300 p-3 text-center">التقدير</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 p-3 text-right font-medium">{item.subject}</td>
                        <td className="border border-gray-300 p-3 text-center font-bold text-lg">{item.grade}</td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span
                            className={`px-2 py-1 rounded text-sm font-medium ${
                              item.grade >= 85
                                ? "bg-green-100 text-green-800"
                                : item.grade >= 75
                                  ? "bg-blue-100 text-blue-800"
                                  : item.grade >= 65
                                    ? "bg-yellow-100 text-yellow-800"
                                    : item.grade >= 50
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.grade >= 85
                              ? "ممتاز"
                              : item.grade >= 75
                                ? "جيد جداً"
                                : item.grade >= 65
                                  ? "جيد"
                                  : item.grade >= 50
                                    ? "مقبول"
                                    : "راسب"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
 
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-medium">GPA:</span>
                  <span className="text-xl font-bold text-green-600">
                    {(grades.reduce((sum, item) => sum + item.grade, 0) / grades.length / 25).toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 text-center">
              <div className="w-full">
                <p className="text-sm text-gray-600 mb-2">
                  تم إصدار النتيجة بتاريخ: {new Date().toLocaleDateString("ar-EG")}
                </p>
                <p className="text-xs text-gray-500">هذه النتيجة معتمدة من كلية الحاسبات والذكاء الاصطناعى</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
        <p>© 2024 كلية الحاسبات والذكاء الاصطناعى - جامعة حلوان. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}
