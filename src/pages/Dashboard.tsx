import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckSquare, Clock, TrendingUp, AlertCircle } from "lucide-react";

export default function Dashboard() {
  // Datos de ejemplo
  const stats = [
    {
      title: "Tareas Pendientes",
      value: "12",
      icon: CheckSquare,
      gradient: "bg-gradient-primary",
    },
    {
      title: "Materias Activas",
      value: "6",
      icon: BookOpen,
      gradient: "bg-gradient-secondary",
    },
    {
      title: "Horas Estudiadas",
      value: "24",
      icon: Clock,
      gradient: "bg-gradient-accent",
    },
    {
      title: "Tareas Completadas",
      value: "85%",
      icon: TrendingUp,
      gradient: "bg-gradient-secondary",
    },
  ];

  const upcomingTasks = [
    { id: 1, title: "Proyecto Final de Cálculo", subject: "Matemáticas", dueDate: "2 días", priority: "high" },
    { id: 2, title: "Ensayo de Historia", subject: "Historia", dueDate: "3 días", priority: "medium" },
    { id: 3, title: "Laboratorio de Química", subject: "Química", dueDate: "5 días", priority: "low" },
  ];

  const subjects = [
    { name: "Matemáticas", progress: 75, tasks: 4 },
    { name: "Historia", progress: 60, tasks: 3 },
    { name: "Química", progress: 45, tasks: 5 },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-hero bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">Bienvenido de vuelta! Aquí está tu resumen académico.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.title} 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6 relative">
              <div className={`absolute inset-0 ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-2xl ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-accent opacity-5 group-hover:opacity-10 transition-opacity" />
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-warning/10">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
              Próximas Entregas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 relative z-10">
            {upcomingTasks.map((task, index) => (
              <div 
                key={task.id} 
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/80 to-muted/40 hover:from-muted hover:to-muted/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.subject}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}
                    className="shadow-md"
                  >
                    {task.dueDate}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
              Ver Todas las Tareas
            </Button>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-secondary opacity-5 group-hover:opacity-10 transition-opacity" />
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-success/10">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              Progreso por Materia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            {subjects.map((subject) => (
              <div key={subject.name} className="space-y-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{subject.name}</span>
                  <span className="text-sm font-medium text-muted-foreground">{subject.tasks} tareas</span>
                </div>
                <div className="space-y-2">
                  <Progress value={subject.progress} className="h-3 shadow-inner" />
                  <span className="text-xs font-medium text-success">{subject.progress}% completado</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
              Ver Todas las Materias
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-xl bg-gradient-hero overflow-hidden hover:shadow-glow-primary transition-all duration-500">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white">Sesión disponible</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¿Listo para estudiar?</h3>
              <p className="text-white/90 text-lg">Inicia una sesión Pomodoro y mantén tu productividad al máximo</p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Clock className="w-6 h-6 mr-2" />
              Iniciar Pomodoro
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
