import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, MapPin, Mail, Menu, X, Home, Info, Briefcase, Contact } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-800">مؤسسة كسب الجزيرة</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'home' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:text-green-800'
                  }`}
                >
                  <Home className="inline-block w-4 h-4 ml-1" />
                  الرئيسية
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'about' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:text-green-800'
                  }`}
                >
                  <Info className="inline-block w-4 h-4 ml-1" />
                  عن الشركة
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'portfolio' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:text-green-800'
                  }`}
                >
                  <Briefcase className="inline-block w-4 h-4 ml-1" />
                  معرض الأعمال
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'contact' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:text-green-800'
                  }`}
                >
                  <Contact className="inline-block w-4 h-4 ml-1" />
                  التواصل
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 w-full text-right"
              >
                <Home className="inline-block w-4 h-4 ml-1" />
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 w-full text-right"
              >
                <Info className="inline-block w-4 h-4 ml-1" />
                عن الشركة
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 w-full text-right"
              >
                <Briefcase className="inline-block w-4 h-4 ml-1" />
                معرض الأعمال
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 w-full text-right"
              >
                <Contact className="inline-block w-4 h-4 ml-1" />
                التواصل
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
              مؤسسة كسب الجزيرة
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8">
              تصميم وتنفيذ الديكورات والأثاث الخشبي
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              نحن مؤسسة رائدة في مجال تصميم وتنفيذ الديكورات والأثاث الخشبي في المملكة العربية السعودية منذ عام 1432 هـ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                استعرض أعمالنا
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">عن الشركة</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 text-2xl">تاريخنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    تأسست مؤسسة كسب الجزيرة في عام 1432 هـ في المملكة العربية السعودية، وهي مؤسسة رائدة في مجال تصميم وتنفيذ الديكورات والأثاث الخشبي. يتميز فريقنا بالخبرة العالية والكفاءة، حيث نعمل على تقديم أفضل وأنسب الحلول الهندسية بأعلى معايير الجودة والحرفية لتلبية متطلبات عملائنا ونيل رضاهم.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 text-2xl">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    نحن نسعى دائماً للابتكار والتطوير في مجال التصميم الداخلي، مما يجعلنا الخيار الأمثل لمن يبحث عن التميز والجودة في أعمال الديكور والأثاث. نلتزم بتقديم خدمات متميزة تلبي تطلعات عملائنا وتفوق توقعاتهم.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">خبرة عالية</h3>
              <p className="text-gray-600">أكثر من عقد من الخبرة في مجال التصميم والتنفيذ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">جودة عالية</h3>
              <p className="text-gray-600">نستخدم أفضل المواد وأحدث التقنيات</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Contact className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">خدمة متميزة</h3>
              <p className="text-gray-600">نهتم برضا العملاء ونقدم خدمة ما بعد البيع</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">معرض الأعمال</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              استعرض مجموعة من أفضل أعمالنا في مختلف التخصصات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bedrooms */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-200">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-16 h-16 text-green-700" />
                </div>
                <CardTitle className="text-green-800 text-xl">غرف النوم</CardTitle>
                <CardDescription>تصاميم عصرية وكلاسيكية لغرف النوم</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  عرض المزيد
                </Button>
              </CardContent>
            </Card>

            {/* Kitchens */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-200">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg flex items-center justify-center mb-4">
                  <Menu className="w-16 h-16 text-emerald-700" />
                </div>
                <CardTitle className="text-green-800 text-xl">المطابخ</CardTitle>
                <CardDescription>مطابخ عملية وأنيقة بأحدث التصاميم</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  عرض المزيد
                </Button>
              </CardContent>
            </Card>

            {/* Decorations */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-200">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-16 h-16 text-teal-700" />
                </div>
                <CardTitle className="text-green-800 text-xl">الديكورات</CardTitle>
                <CardDescription>ديكورات داخلية تضفي لمسة جمالية</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  عرض المزيد
                </Button>
              </CardContent>
            </Card>

            {/* TV Units */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-200">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg flex items-center justify-center mb-4">
                  <Contact className="w-16 h-16 text-cyan-700" />
                </div>
                <CardTitle className="text-green-800 text-xl">ديكورات التيفي</CardTitle>
                <CardDescription>وحدات تلفزيون عصرية ومتطورة</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  عرض المزيد
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">تواصل معنا</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              نحن هنا لخدمتك، تواصل معنا للحصول على استشارة مجانية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-green-200 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-green-800 text-2xl">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">أرقام الهاتف</h3>
                      <p className="text-gray-600">00966550539398</p>
                      <p className="text-gray-600">00966535061458</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">الموقع</h3>
                      <p className="text-gray-600">الرياض - الرويضات الفيصلية</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open('https://maps.google.com/?q=الرياض+الرويضات+الفيصلية', '_blank')}
                    >
                      <MapPin className="w-4 h-4 ml-2" />
                      عرض الموقع على خرائط جوجل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-green-200 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-green-800 text-2xl">ساعات العمل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="font-medium text-green-800">السبت - الخميس</span>
                    <span className="text-gray-600">8:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="font-medium text-green-800">الجمعة</span>
                    <span className="text-gray-600">مغلق</span>
                  </div>
                  
                  <div className="pt-6 space-y-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open('https://wa.me/966550539398', '_blank')}
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      تواصل عبر الواتساب
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.open('tel:+966550539398', '_blank')}
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل بنا الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">مؤسسة كسب الجزيرة</h3>
            <p className="text-green-200 mb-6">
              تصميم وتنفيذ الديكورات والأثاث الخشبي منذ 1432 هـ
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a href="tel:+966550539398" className="text-green-200 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://wa.me/966550539398" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Contact className="w-6 h-6" />
              </a>
              <a href="https://maps.google.com/?q=الرياض+الرويضات+الفيصلية" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-green-800">
              <p className="text-green-300 text-sm">
                © 2024 مؤسسة كسب الجزيرة. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

