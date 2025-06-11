import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">FCAIH - نظام النتائج الإلكترونى</h1>
              <p className="text-sm opacity-90">كلية الحاسبات والذكاء الاصطناعى</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm hover:underline">
                الرئيسية
              </Link>
              <Link href="#" className="text-sm hover:underline">
                اتصل بنا
              </Link>
              <Link href="#" className="text-sm hover:underline">
                المساعدة
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg border-2">
            <CardHeader className="text-center bg-blue-50">
              <CardTitle className="text-2xl text-blue-800">نتائج الامتحانات</CardTitle>
              <CardDescription className="text-lg">أدخل الرقم الجامعى لعرض النتيجة</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form action="/results" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId" className="text-right block text-lg font-medium">
                    الرقم الجامعى
                  </Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    placeholder="مثال: 20230001"
                    required
                    className="text-center text-lg p-3"
                    dir="ltr"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-3">
                  عرض النتيجة
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center text-sm text-muted-foreground bg-gray-50">
              <div className="w-full">
                <p>العام الدراسى 2024-2025</p>
                <p className="text-xs mt-1">الفصل الدراسى الثاني</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-yellow-800 text-sm">
              <strong>تنبيه:</strong> فى حالة عدم ظهور النتيجة، يرجى التأكد من صحة الرقم الجامعى
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
        <p>© 2024 كلية الحاسبات والذكاء الاصطناعى - جامعة حلوان. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}
