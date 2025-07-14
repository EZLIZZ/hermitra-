"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Utensils,
  Clock,
  Star,
  Heart,
  Leaf,
  Zap,
  Search,
  BookOpen,
  ChefHat,
  Apple,
  Droplets,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function NutritionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([])
  const [dailyIntake, setDailyIntake] = useState({
    calories: 1250,
    protein: 65,
    carbs: 120,
    fiber: 18,
    water: 6,
  })

  const recipes = [
    {
      id: "dal-bhat-tarkari",
      title: "Dal Bhat Tarkari",
      category: "Traditional Nepali",
      time: "45 min",
      difficulty: "Medium",
      calories: 380,
      servings: 2,
      rating: 4.9,
      image: "/photos/thakali.jpg",
      ingredients: ["Brown rice", "Masoor dal", "Spinach", "Cauliflower", "Turmeric"],
      benefits: ["High protein", "Low GI", "Anti-inflammatory"],
      description: "Traditional Nepali meal adapted for PCOS with brown rice and nutrient-rich vegetables.",
      // nutrition: {
      //   protein: "18g",
      //   carbs: "45g",
      //   fiber: "12g",
      //   iron: "4.2mg",
      //   folate: "85mcg",
      // },
    },
    {
      id: "gundruk-soup",
      title: "Gundruk Soup ",
      category: "Traditional Nepali",
      time: "30 min",
      difficulty: "Easy",
      calories: 220,
      servings: 2,
      rating: 4.7,
      image: "/photos/gundrukjhol.jpg",
      ingredients: ["Gundruk", "Tomatoes", "Ginger", "Garlic"],
      benefits: ["Probiotic", "High fiber", "Vitamin C"],
      description: "Fermented leafy greens soup rich in probiotics and nutrients, perfect for gut health.",
      // nutrition: {
      //   protein: "12g",
      //   carbs: "28g",
      //   fiber: "8g",
      //   vitamin_c: "45mg",
      //   probiotics: "High",
      // },
    },
    {
      id: "buckwheat-dhido",
      title: "Kodo Dhido with Vegetables",
      category: "Traditional Nepali",
      time: "25 min",
      difficulty: "Easy",
      calories: 290,
      servings: 1,
      rating: 4.6,
      image: "/photos/dhido.jpg",
      ingredients: ["Buckwheat flour", "Spinach", "Radish leaves", "Sesame seeds"],
      benefits: ["Gluten-free", "Low GI", "High magnesium"],
      description: "Traditional Nepali porridge made with nutrient-dense buckwheat flour.",
      // nutrition: {
      //   protein: "11g",
      //   carbs: "35g",
      //   fiber: "9g",
      //   magnesium: "180mg",
      //   manganese: "2.1mg",
      // },
    },
    {
      id: "millet-roti",
      title: "Kodo Roti with Butter",
      category: "Traditional Nepali",
      time: "20 min",
      difficulty: "Easy",
      calories: 320,
      servings: 2,
      rating: 4.5,
      image: "/photos/milletroti.jpg",
      ingredients: ["Kodo millet flour", "Ghee", "Fenugreek leaves", "Cumin seeds"],
      benefits: ["Low GI", "High protein", "Hormone balancing"],
      description: "Nutritious flatbread made from ancient millet grains, excellent for PCOS management.",
      // nutrition: {
      //   protein: "14g",
      //   carbs: "38g",
      //   fiber: "7g",
      //   iron: "3.8mg",
      //   zinc: "2.4mg",
      // },
    },
    {
      id: "saag-chicken",
      title: "Nepali Saag with Chicken",
      category: "Traditional Nepali",
      time: "40 min",
      difficulty: "Medium",
      calories: 420,
      servings: 2,
      rating: 4.8,
      image: "/photos/saagchicken.jpg",
      ingredients: ["Chicken breast", "Mustard greens", "Spinach", "Ginger", "Garlic"],
      benefits: ["High protein", "Iron rich", "Anti-inflammatory"],
      description: "Traditional leafy greens curry with lean protein, packed with nutrients.",
      // nutrition: {
      //   protein: "32g",
      //   carbs: "15g",
      //   fiber: "6g",
      //   iron: "5.2mg",
      //   vitamin_k: "180mcg",
      // },
    },
    {
      id: "chiura-mix",
      title: "Nutritious Chiura Bowl",
      category: "Traditional Nepali",
      time: "10 min",
      difficulty: "Easy",
      calories: 280,
      servings: 1,
      rating: 4.4,
      image: "/photos/chiurawebp.webp",
      ingredients: ["Beaten rice", "Yogurt", "Cucumber", "Mint", "Roasted peanuts"],
      benefits: ["Probiotic", "Quick energy", "Digestive health"],
      description: "Light and nutritious beaten rice bowl with probiotics and healthy fats.",
      // nutrition: {
      //   protein: "9g",
      //   carbs: "42g",
      //   fiber: "4g",
      //   calcium: "120mg",
      //   healthy_fats: "8g",
      // },
    },
    {
      id: "lapsi-porridge",
      title: "Lapsi with Nuts",
      category: "Traditional Nepali",
      time: "35 min",
      difficulty: "Medium",
      calories: 350,
      servings: 2,
      rating: 4.6,
      image: "/photos/lapsi.jpg",
      ingredients: ["Lapsi (broken wheat)", "Almonds", "Walnuts", "Cardamom", "Ghee"],
      benefits: ["High fiber", "Sustained energy", "Heart healthy"],
      description: "Traditional broken wheat porridge enriched with nuts and aromatic spices.",
      // nutrition: {
      //   protein: "13g",
      //   carbs: "48g",
      //   fiber: "11g",
      //   vitamin_e: "6mg",
      //   omega_3: "1.2g",
      // },
    },
    {
      id: "nettle-curry",
      title: "Sisnu (Nettle) Curry",
      category: "Traditional Nepali",
      time: "25 min",
      difficulty: "Easy",
      calories: 180,
      servings: 2,
      rating: 4.7,
      image: "/photos/sisnu.webp",
      ingredients: ["Fresh nettle", "Onions", "Tomatoes", "Turmeric", "Mustard oil"],
      benefits: ["Detoxifying", "Anti-inflammatory", "Hormone balancing"],
      description: "Wild nettle curry rich in minerals and natural detoxifying compounds.",
      // nutrition: {
      //   protein: "8g",
      //   carbs: "12g",
      //   fiber: "7g",
      //   iron: "6.1mg",
      //   potassium: "334mg",
      // },
    },
  ]

  const mealPlans = [
    {
      day: "Monday",
      breakfast: "Nutritious Chiura Bowl",
      lunch: "PCOS-Friendly Dal Bhat Tarkari",
      dinner: "Gundruk Soup with Quinoa",
      snack: "Roasted soybeans (bhatmas)",
    },
    {
      day: "Tuesday",
      breakfast: "Lapsi Porridge with Nuts",
      lunch: "Buckwheat Dhido with Vegetables",
      dinner: "Nepali Saag with Lean Chicken",
      snack: "Cucumber with mint chutney",
    },
    {
      day: "Wednesday",
      breakfast: "Kodo Millet Roti with Ghee",
      lunch: "Sisnu (Nettle) Curry with brown rice",
      dinner: "Mixed dal with steamed vegetables",
      snack: "Roasted pumpkin seeds",
    },
  ]

  const nepaliSuperfoods = [
    {
      name: "Gundruk",
      category: "Fermented Greens",
      benefits: ["Probiotics", "Vitamin C", "Digestive health"],
      nutrition: "Per 100g: Protein 4.2g, Fiber 8.1g, Vitamin C 45mg, Iron 2.8mg",
      pcosSupport: "Supports gut health and hormone balance through probiotics",
    },
    {
      name: "Buckwheat (Fapar)",
      category: "Ancient Grain",
      benefits: ["Gluten-free", "Low GI", "Magnesium rich"],
      nutrition: "Per 100g: Protein 13.2g, Fiber 10g, Magnesium 231mg, Manganese 1.3mg",
      pcosSupport: "Helps regulate blood sugar and supports insulin sensitivity",
    },
    {
      name: "Kodo Millet",
      category: "Ancient Grain",
      benefits: ["Low GI", "High protein", "Iron rich"],
      nutrition: "Per 100g: Protein 8.3g, Fiber 9g, Iron 0.5mg, Zinc 1.4mg",
      pcosSupport: "Excellent for weight management and blood sugar control",
    },
    {
      name: "Sisnu (Nettle)",
      category: "Wild Green",
      benefits: ["Detoxifying", "Iron rich", "Anti-inflammatory"],
      nutrition: "Per 100g: Protein 2.7g, Iron 1.6mg, Potassium 334mg, Vitamin K 498mcg",
      pcosSupport: "Natural detoxifier that supports liver function and hormone metabolism",
    },
    {
      name: "Lapsi (Broken Wheat)",
      category: "Whole Grain",
      benefits: ["High fiber", "B vitamins", "Sustained energy"],
      nutrition: "Per 100g: Protein 12.1g, Fiber 12.5g, B1 0.4mg, B3 4.3mg",
      pcosSupport: "Provides sustained energy and supports metabolic health",
    },
    {
      name: "Bhatmas (Black Soybean)",
      category: "Legume",
      benefits: ["Complete protein", "Isoflavones", "Heart healthy"],
      nutrition: "Per 100g: Protein 36g, Fiber 9.3g, Folate 375mcg, Magnesium 280mg",
      pcosSupport: "Isoflavones help balance hormones naturally",
    },
  ]

  const nutritionTips = [
    {
      title: "Include Traditional Fermented Foods",
      description: "Gundruk, kinema, and other fermented foods support gut health",
      icon: <Apple className="h-5 w-5" />,
    },
    {
      title: "Choose Ancient Grains",
      description: "Buckwheat, millet, and lapsi have lower glycemic index",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Use Local Seasonal Vegetables",
      description: "Sisnu, palungo, and other local greens are nutrient powerhouses",
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      title: "Cook with Traditional Spices",
      description: "Turmeric, fenugreek, and cumin have anti-inflammatory properties",
      icon: <Zap className="h-5 w-5" />,
    },
  ]

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleFavorite = (recipeId: string) => {
    setFavoriteRecipes((prev) => (prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="pt-10 py-16 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nutrition Guide</h1>
          <p className="text-lg text-gray-600">PCOS-friendly Nepali recipes and traditional foods</p>
        </div>

        {/* Daily Nutrition Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="border-pink-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-4 text-center">
              <Zap className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Calories</p>
              <p className="text-xl font-bold text-orange-600">{dailyIntake.calories}</p>
            </CardContent>
          </Card>

          <Card
            className="border-purple-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-4 text-center">
              <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Protein</p>
              <p className="text-xl font-bold text-red-600">{dailyIntake.protein}g</p>
            </CardContent>
          </Card>

          <Card
            className="border-green-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-4 text-center">
              <Leaf className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Carbs</p>
              <p className="text-xl font-bold text-green-600">{dailyIntake.carbs}g</p>
            </CardContent>
          </Card>

          <Card
            className="border-blue-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-4 text-center">
              <Apple className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Fiber</p>
              <p className="text-xl font-bold text-blue-600">{dailyIntake.fiber}g</p>
            </CardContent>
          </Card>

          <Card
            className="border-cyan-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-4 text-center">
              <Droplets className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Water</p>
              <p className="text-xl font-bold text-cyan-600">{dailyIntake.water} cups</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recipes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recipes">Nepali Recipes</TabsTrigger>
            <TabsTrigger value="superfoods">Local Superfoods</TabsTrigger>
            <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
            <TabsTrigger value="tips">Nutrition Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="recipes" className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto animate-fade-in-up">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search Nepali recipes..."
                className="pl-10 border-pink-200 focus:border-pink-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, index) => (
                <Card
                  key={recipe.id}
                  className="border-pink-200 py-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                  <div className="relative">
  <img
    src={recipe.image}
    className="w-full h-48 rounded-t-lg object-cover"
  />

  {/* Utensils icon overlay */}
 

  <Button
    size="sm"
    variant="ghost"
    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
    onClick={() => toggleFavorite(recipe.id)}
  >
    <Heart
      className={`h-4 w-4 ${
        favoriteRecipes.includes(recipe.id)
          ? "fill-red-500 text-red-500"
          : "text-gray-400"
      }`}
    />
  </Button>
</div>

                  </CardHeader>

                  <CardContent className="px-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-800 mb-1">{recipe.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {recipe.category}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {recipe.rating}
                        </span>
                      </div>
                      <Badge className={getDifficultyColor(recipe.difficulty)}>{recipe.difficulty}</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-600">{recipe.calories} cal</span>
                      <span className="text-gray-600">{recipe.servings} servings</span>
                    </div>

                    {/* Nutrition Info */}
                    {/* <div className="bg-green-50 p-2 rounded-lg mb-3">
                      <p className="text-xs font-medium text-green-800 mb-1">Nutrition per serving:</p>
                      <div className="grid grid-cols-2 gap-1 text-xs text-green-700">
                        {Object.entries(recipe.nutrition).map(([key, value]) => (
                          <span key={key}>
                            {key.replace("_", " ")}: {value}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    <div className="flex flex-wrap gap-1 mb-3">
                      {recipe.benefits.slice(0, 2).map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-200 mb-2">
                      <ChefHat className="h-4 w-4 mr-2" />
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="superfoods" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nepaliSuperfoods.map((food, index) => (
                <Card
                  key={index}
                  className="border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <Leaf className="h-5 w-5 mr-2" />
                      {food.name}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {food.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Health Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {food.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-1">Nutrition Facts:</h4>
                      <p className="text-sm text-blue-700">{food.nutrition}</p>
                    </div>

                    <div className="bg-pink-50 p-3 rounded-lg">
                      <h4 className="font-medium text-pink-800 mb-1">PCOS Support:</h4>
                      <p className="text-sm text-pink-700">{food.pcosSupport}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meal-plans" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mealPlans.map((plan, index) => (
                <Card
                  key={plan.day}
                  className="border-purple-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-purple-600">{plan.day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-800">Breakfast</p>
                        <p className="text-sm text-gray-600">{plan.breakfast}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-800">Lunch</p>
                        <p className="text-sm text-gray-600">{plan.lunch}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-800">Dinner</p>
                        <p className="text-sm text-gray-600">{plan.dinner}</p>
                      </div>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-800">Snack</p>
                        <p className="text-sm text-gray-600">{plan.snack}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-200">
                      <BookOpen className="h-4 w-4 mr-2" />
                      View Full Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutritionTips.map((tip, index) => (
                <Card
                  key={index}
                  className="border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">{tip.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Tips Section */}
            <Card className="border-pink-200 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-pink-600">PCOS Nutrition Guidelines with Nepali Foods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Traditional Foods to Include:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Gundruk and fermented vegetables
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Buckwheat and millet grains
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Local leafy greens (sisnu, palungo)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Traditional legumes (bhatmas, kerau)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Seasonal fruits (lapsi, amala)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Foods to Limit:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Refined white rice and flour
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Sugary sweets and mithai
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Deep-fried snacks (sel roti, pakoda)
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Processed instant noodles
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Excessive tea with sugar
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}