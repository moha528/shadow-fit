import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, LineChart, Shield, Zap, Star, Users, Trophy, Flame } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-zinc-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="h-6 w-6 text-emerald-500" />
          <span>ShadowFit</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Témoignages
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Tarifs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
              Connexion
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Essai gratuit
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
          <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
            <Badge className="w-fit bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-2">
              Nouveau : Système d'IA pour optimiser vos entraînements
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Transformez votre entraînement en <span className="gradient-text">expérience gamifiée</span>
            </h1>
            <p className="text-zinc-400 md:text-xl">
              ShadowFit révolutionne votre routine d'entraînement en transformant chaque exercice en une expérience
              visuelle captivante. Observez votre silhouette évoluer en temps réel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  Voir la démo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>Essai gratuit de 14 jours</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-emerald-500" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl animate-pulse"></div>
                  <div className="relative z-10 bg-zinc-900 p-1 rounded-full border border-zinc-700">
                    <svg width="300" height="300" viewBox="0 0 200 200" className="text-emerald-500">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                      <circle cx="100" cy="50" r="20" fill="url(#gradient)" />
                      <path d="M70 70 L70 140 L130 140 L130 70 Z" fill="url(#gradient)" opacity="0.8" />
                      <path d="M70 140 L70 170 L130 170 L130 140 Z" fill="url(#gradient)" opacity="0.6" />
                      <path d="M70 70 L50 120 L60 125 L70 80 Z" fill="url(#gradient)" opacity="0.7" />
                      <path d="M130 70 L150 120 L140 125 L130 80 Z" fill="url(#gradient)" opacity="0.7" />
                      <path d="M70 170 L65 190 L85 190 L90 170 Z" fill="url(#gradient)" opacity="0.5" />
                      <path d="M110 170 L115 190 L135 190 L130 170 Z" fill="url(#gradient)" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 z-20">
                <div className="text-white font-medium">Visualisez votre progression en temps réel</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg border border-zinc-800 z-30">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 text-white p-2 rounded-full">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">+27%</div>
                  <div className="text-xs text-zinc-500">Progression moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">50K+</div>
              <div className="text-zinc-400">Utilisateurs actifs</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">4.8/5</div>
              <div className="text-zinc-400">Note moyenne</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">92%</div>
              <div className="text-zinc-400">Taux de satisfaction</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">3M+</div>
              <div className="text-zinc-400">Entraînements réalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:pb-16">
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-2">Fonctionnalités</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Une plateforme complète pour votre transformation
            </h2>
            <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
              ShadowFit combine technologie de pointe et science du sport pour vous offrir une expérience d'entraînement
              unique et personnalisée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Visualisation 3D avancée</h3>
              <p className="text-zinc-400">
                Observez votre silhouette évoluer en 3D à mesure que vous progressez dans vos exercices, avec des
                détails anatomiques précis.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Analyse IA personnalisée</h3>
              <p className="text-zinc-400">
                Notre IA analyse vos performances et adapte vos programmes d'entraînement en temps réel pour maximiser
                vos résultats.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Prévention des blessures</h3>
              <p className="text-zinc-400">
                Système avancé de détection des déséquilibres musculaires et alertes en cas de surentraînement pour
                éviter les blessures.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Programmes sur mesure</h3>
              <p className="text-zinc-400">
                Plus de 200 programmes d'entraînement personnalisés selon votre niveau, vos objectifs et votre
                disponibilité.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Système de gamification</h3>
              <p className="text-zinc-400">
                Gagnez des points, débloquez des badges, participez à des défis et grimpez dans le classement pour
                rester motivé.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col gap-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="bg-emerald-500/10 text-emerald-500 p-2 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Communauté active</h3>
              <p className="text-zinc-400">
                Rejoignez une communauté de passionnés, partagez vos progrès, participez à des défis de groupe et
                trouvez des partenaires d'entraînement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="w-full py-12 md:py-24 border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-4">
                Fonctionnalités avancées
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
                Suivi nutritionnel intelligent
              </h2>
              <p className="text-zinc-400 mb-6">
                ShadowFit ne se limite pas à l'entraînement. Notre système de suivi nutritionnel s'intègre parfaitement
                à votre programme pour optimiser vos résultats.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 text-emerald-500 p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Analyse des macronutriments</h4>
                    <p className="text-zinc-400 text-sm">
                      Suivez vos apports en protéines, glucides et lipides avec des recommandations personnalisées.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 text-emerald-500 p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Planification des repas</h4>
                    <p className="text-zinc-400 text-sm">
                      Recevez des suggestions de repas adaptés à vos objectifs et préférences alimentaires.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 text-emerald-500 p-1 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Synchronisation avec l'entraînement</h4>
                    <p className="text-zinc-400 text-sm">
                      Ajustez automatiquement votre nutrition en fonction de l'intensité de vos entraînements et de vos
                      dépenses caloriques.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/features">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Découvrir toutes les fonctionnalités
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-emerald-500/10 blur-xl opacity-70"></div>
              <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Votre plan nutritionnel</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-500">2100</div>
                        <div className="text-xs text-zinc-400">Calories</div>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-500">180g</div>
                        <div className="text-xs text-zinc-400">Protéines</div>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-500">65g</div>
                        <div className="text-xs text-zinc-400">Lipides</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Petit-déjeuner</span>
                        <span className="text-emerald-500">520 kcal</span>
                      </div>
                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <Flame className="h-6 w-6 text-emerald-500" />
                          </div>
                          <div>
                            <div className="font-medium">Smoothie protéiné</div>
                            <div className="text-xs text-zinc-400">
                              Banane, protéine whey, lait d'amande, flocons d'avoine
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Déjeuner</span>
                        <span className="text-emerald-500">680 kcal</span>
                      </div>
                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <Flame className="h-6 w-6 text-emerald-500" />
                          </div>
                          <div>
                            <div className="font-medium">Poulet & quinoa</div>
                            <div className="text-xs text-zinc-400">
                              Poulet grillé, quinoa, légumes verts, huile d'olive
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:pb-16">
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-2">Témoignages</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ce que nos utilisateurs disent</h2>
            <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
              Découvrez comment ShadowFit a transformé la routine d'entraînement de nos utilisateurs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sophie Martin</h4>
                  <p className="text-sm text-zinc-400">Utilisatrice depuis 6 mois</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "ShadowFit a complètement changé ma façon de m'entraîner. La visualisation de ma progression me motive
                chaque jour à me dépasser. J'ai perdu 8kg et gagné en masse musculaire !"
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                  T
                </div>
                <div>
                  <h4 className="font-bold">Thomas Dubois</h4>
                  <p className="text-sm text-zinc-400">Utilisateur depuis 1 an</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "Grâce à ShadowFit, j'ai pu identifier mes déséquilibres musculaires et adapter mon entraînement. Les
                résultats sont impressionnants ! Le suivi nutritionnel a été un vrai plus."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col gap-4 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                  E
                </div>
                <div>
                  <h4 className="font-bold">Emma Petit</h4>
                  <p className="text-sm text-zinc-400">Utilisatrice depuis 3 mois</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                "Le système de gamification rend l'entraînement tellement plus amusant ! J'adore les défis quotidiens et
                les badges à débloquer. Je n'ai jamais été aussi régulière dans mes séances."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:pb-16">
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-2">Tarifs</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Des formules adaptées à vos besoins
            </h2>
            <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
              Choisissez le plan qui vous convient et commencez à transformer votre entraînement dès aujourd'hui.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Basic Plan */}
            <div className="flex flex-col p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Basique</h3>
                <p className="text-zinc-400 mt-1">Pour les débutants</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">9,99€</span>
                <span className="text-zinc-400">/mois</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Visualisation de la silhouette</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Suivi de progression basique</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>20 programmes d'entraînement</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Système de badges</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  Essai gratuit
                </Button>
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="flex flex-col p-6 bg-zinc-900 rounded-xl border-2 border-emerald-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-zinc-400 mt-1">Pour les passionnés</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">19,99€</span>
                <span className="text-zinc-400">/mois</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Tout ce qui est inclus dans Basique</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Analyse IA personnalisée</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>100+ programmes d'entraînement</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Suivi nutritionnel</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Accès à la communauté</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Essai gratuit</Button>
              </Link>
            </div>
            {/* Premium Plan */}
            <div className="flex flex-col p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="text-zinc-400 mt-1">Pour les professionnels</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">29,99€</span>
                <span className="text-zinc-400">/mois</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Tout ce qui est inclus dans Pro</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Programmes personnalisés illimités</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Coaching personnalisé</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Analyse avancée des performances</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-500 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Intégration avec appareils connectés</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  Essai gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4 relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
            Prêt à transformer votre entraînement ?
          </h2>
          <p className="max-w-[700px] text-emerald-50 md:text-xl/relaxed">
            Rejoignez des milliers d'utilisateurs qui ont déjà révolutionné leur façon de s'entraîner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/register">
              <Button size="lg" className="bg-black text-white hover:bg-zinc-900">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Voir la démo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black text-zinc-400 border-t border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <Dumbbell className="h-6 w-6 text-emerald-500" />
                <span>ShadowFit</span>
              </div>
              <p className="text-sm">
                Transformez votre entraînement en expérience gamifiée et atteignez vos objectifs plus rapidement.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="hover:text-emerald-400 transition-colors">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-emerald-400 transition-colors">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 ShadowFit. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
