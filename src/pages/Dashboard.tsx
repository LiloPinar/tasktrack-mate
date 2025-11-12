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
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Materias Activas",
      value: "6",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Horas Estudiadas",
      value: "24",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Tareas Completadas",
      value: "85%",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido de vuelta! Aquí está tu resumen académico.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Próximas Entregas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.subject}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}>
                    {task.dueDate}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">Ver Todas las Tareas</Button>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Progreso por Materia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {subjects.map((subject) => (
              <div key={subject.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{subject.name}</span>
                  <span className="text-sm text-muted-foreground">{subject.tasks} tareas</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{subject.progress}% completado</span>
              </div>
            ))}
            <Button variant="outline" className="w-full">Ver Todas las Materias</Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-md bg-gradient-primary">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">¿Listo para estudiar?</h3>
              <p className="text-primary-foreground/90">Inicia una sesión Pomodoro y mantén tu productividad</p>
            </div>
            <Button size="lg" variant="secondary" className="shadow-lg">
              <Clock className="w-5 h-5 mr-2" />
              Iniciar Pomodoro
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
