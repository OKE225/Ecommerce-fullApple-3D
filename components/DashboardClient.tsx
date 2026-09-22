"use client";

import { ShopProduct } from "@/types/ProductsTypes";
import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  DollarSign,
  TrendingUp,
  Trophy,
  ShoppingCart,
  Activity,
  BarChart3,
  TrendingDown,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CHART_COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#14b8a6",
];

export default function DashboardClient({
  products,
}: {
  products: ShopProduct[];
}) {
  const [selectedCount, setSelectedCount] = useState<string | null>("10");

  const selectedProducts = useMemo(() => {
    const count = parseInt(selectedCount, 10);
    return [...products].sort(() => Math.random() - 0.5).slice(0, count);
  }, [products, selectedCount]);

  const totalRevenue = selectedProducts.reduce(
    (sum, product) => sum + product.price * (product.stock || 0),
    0,
  );
  const avgPrice =
    selectedProducts.length > 0
      ? selectedProducts.reduce((sum, product) => sum + product.price, 0) /
        selectedProducts.length
      : 0;
  const totalStock = selectedProducts.reduce(
    (sum, product) => sum + (product.stock || 0),
    0,
  );

  const byCategory = Object.values(
    selectedProducts.reduce<
      Record<
        string,
        { name: string; sales: number; revenue: number; color: string }
      >
    >((acc, product) => {
      const categoryName = product.category?.name ?? "Uncategorized";
      if (!acc[categoryName]) {
        const idx = Object.keys(acc).length;
        acc[categoryName] = {
          name: categoryName,
          sales: 0,
          revenue: 0,
          color: CHART_COLORS[idx % CHART_COLORS.length],
        };
      }
      acc[categoryName].sales += product.stock || 0;
      acc[categoryName].revenue += product.price * (product.stock || 0);
      return acc;
    }, {}),
  );

  const topProducts = [...selectedProducts]
    .sort((a, b) => b.price * (b.stock || 0) - a.price * (a.stock || 0))
    .slice(0, 5)
    .map((product, index) => ({
      name:
        product.name.length > 20
          ? product.name.slice(0, 20) + "…"
          : product.name,
      revenue: product.price * (product.stock || 0),
      color: CHART_COLORS[index % CHART_COLORS.length],
    }));

  const monthlyData = [
    { name: "Jan", revenue: Math.round(totalRevenue * 0.08) },
    { name: "Feb", revenue: Math.round(totalRevenue * 0.05) },
    { name: "Mar", revenue: Math.round(totalRevenue * 0.09) },
    { name: "Apr", revenue: Math.round(totalRevenue * 0.1) },
    { name: "May", revenue: Math.round(totalRevenue * 0.15) },
    { name: "Jun", revenue: Math.round(totalRevenue * 0.12) },
  ];

  const stockRevenueData = byCategory.map((category) => ({
    name:
      category.name.length > 15
        ? category.name.slice(0, 15) + "…"
        : category.name,
    stock: category.sales,
    revenue: Math.round(category.revenue / 1000),
  }));

  const radarData = byCategory.map((category) => ({
    subject:
      category.name.length > 12
        ? category.name.slice(0, 12) + "…"
        : category.name,
    A: Math.round(category.revenue / 1000),
    B: category.sales,
    fullMark:
      Math.max(...byCategory.map((category) => category.revenue)) / 1000,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <BarChart3 className="h-7 w-7" />
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Overview of your store performance and product analytics
          </p>
        </div>
        <Select value={selectedCount} onValueChange={setSelectedCount}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select products" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 products</SelectItem>
            <SelectItem value="10">10 products</SelectItem>
            <SelectItem value="20">20 products</SelectItem>
            <SelectItem value="50">50 products</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        <Card className="border-l-4 bg-blue-50 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Total products
            </CardTitle>
            <Package className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{products.length}</div>
            <p className="text-xs text-muted-foreground">Products in catalog</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 bg-green-50 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Estimated revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${totalRevenue.toLocaleString("pl-PL")}
            </div>
            <p className="text-xs text-muted-foreground">
              Based on current stock
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 bg-amber-50 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Average price
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ${avgPrice.toLocaleString("pl-PL")}
            </div>
            <p className="text-xs text-muted-foreground">Per product</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 bg-indigo-50 border-l-indigo-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Total stock</CardTitle>
            <ShoppingCart className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalStock.toLocaleString("pl-PL")}
            </div>
            <p className="text-xs text-muted-foreground">Items available</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Sales by category
                </CardTitle>
                <CardDescription>
                  Distribution of products across categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={byCategory}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-slate-200"
                      />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: 8,
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                      />
                      <Bar dataKey="sales" radius={[16, 16, 0, 0]}>
                        {byCategory.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Monthly revenue
                </CardTitle>
                <CardDescription>
                  Revenue trend over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <defs>
                        <linearGradient
                          id="colorRevenue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1">
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={1}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0.2}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-slate-200"
                      />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: 8,
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  Top 5 products by revenue
                </CardTitle>
                <CardDescription>Highest performing products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={topProducts}
                        dataKey="revenue"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={110}
                        label={({ name }) => name}>
                        {topProducts.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: 8,
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-indigo-500" />
                  Stock vs Revenue by category
                </CardTitle>
                <CardDescription>
                  Comparison of inventory and revenue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stockRevenueData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-slate-200"
                      />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: 8,
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                      />
                      <Legend />
                      <Bar
                        dataKey="stock"
                        fill="#10b981"
                        radius={[8, 8, 0, 0]}
                        name="Stock"
                      />
                      <Bar
                        dataKey="revenue"
                        fill="#3b82f6"
                        radius={[8, 8, 0, 0]}
                        name="Revenue (x1000)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2"></div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-500" />
                Category performance overview
              </CardTitle>
              <CardDescription>
                Multi-dimensional analysis of category performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis
                      dataKey="subject"
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <PolarRadiusAxis stroke="#94a3b8" fontSize={10} />
                    <Radar
                      name="Revenue (x1000)"
                      dataKey="A"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Stock"
                      dataKey="B"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: 8,
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      labelStyle={{ color: "#1e293b", fontWeight: 600 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-violet-500" />
                Product overview (top {selectedProducts.length})
              </CardTitle>
              <CardDescription>
                Best performing products by estimated revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Name
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Category
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Price
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Stock
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Revenue
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProducts.map((product, index) => (
                      <tr
                        key={index}
                        className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle font-medium">
                          {product.name}
                        </td>
                        <td className="p-4 align-middle">
                          {product.category?.name ?? (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="p-4 align-middle text-right">
                          ${product.price.toLocaleString("pl-PL")}
                        </td>
                        <td className="p-4 align-middle text-right">
                          {product.stock}
                        </td>
                        <td className="p-4 align-middle text-right">
                          <Badge variant="secondary">
                            $
                            {(product.price * product.stock).toLocaleString(
                              "pl-PL",
                            )}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
