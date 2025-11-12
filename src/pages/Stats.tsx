import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, CheckCircle2, Clock } from "lucide-react";

export default function Stats() {
  const weeklyStats = [
    { day: "Lun", completed: 3, pending: 2 },
    { day: "Mar", completed: 4, pending: 1 },
    { day: "Mié", completed: 2, pending: 3 },
    { day: "Jue", completed: 5, pending: 0 },
    { day: "Vie", completed: 3, pending: 2 },
    { day: "Sáb", completed: 1, pending: 4 },
    { day: "Dom", completed: 2, pending: 1 },
  ];

  const subjectStats = [
    { name: "Matemáticas", completed: 15, total: 20, hours: 24 },
    { name: "Historia", completed: 12, total: 15, hours: 18 },
    { name: "Química", completed: 8, total: 18, hours: 20 },
    { name: "Literatura", completed: 10, total: 12, hours: 15 },
    { name: "Física", completed: 9, total: 16, hours: 22 },
    { name: "Programación", completed: 14, total: 18, hours: 28 },
  ];

  const totalCompleted = subjectStats.reduce((acc, curr) => acc + curr.completed, 0);
  const totalTasks = subjectStats.reduce((acc, curr) => acc + curr.total, 0);
  const totalHours = subjectStats.reduce((acc, curr) => acc + curr.hours, 0);
  const completionRate = Math.round((totalCompleted / totalTasks) * 100);

  const maxCompleted = Math.max(...weeklyStats.map(s => s.completed));
  const maxPending = Math.max(...weeklyStats.map(s => s.pending));
  const maxHeight = Math.max(maxCompleted, maxPending);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Estadísticas</h1>
        <p className="text-muted-foreground">Analiza tu rendimiento y productividad académica</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-md bg-gradient-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-foreground/80 mb-1">Tasa de Completitud</p>
                <p className="text-3xl font-bold text-primary-foreground">{completionRate}%</p>
              </div>
              <div className="p-3 rounded-full bg-primary-foreground/20">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-success">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-success-foreground/80 mb-1">Tareas Completadas</p>
                <p className="text-3xl font-bold text-success-foreground">{totalCompleted}</p>
              </div>
              <div className="p-3 rounded-full bg-success-foreground/20">
                <CheckCircle2 className="w-6 h-6 text-success-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total de Tareas</p>
                <p className="text-3xl font-bold text-foreground">{totalTasks}</p>
              </div>
              <div className="p-3 rounded-full bg-accent/20">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Horas Estudiadas</p>
                <p className="text-3xl font-bold text-foreground">{totalHours}h</p>
              </div>
              <div className="p-3 rounded-full bg-info/20">
                <Clock className="w-6 h-6 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Activity Chart */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Actividad Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-4 h-64">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col gap-1 items-center justify-end flex-1">
                  <div
                    className="w-full bg-success rounded-t transition-all hover:opacity-80"
                    style={{ height: `${(stat.completed / maxHeight) * 100}%` }}
                  />
                  <div
                    className="w-full bg-warning rounded-t transition-all hover:opacity-80"
                    style={{ height: `${(stat.pending / maxHeight) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{stat.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success rounded" />
              <span className="text-sm text-muted-foreground">Completadas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-warning rounded" />
              <span className="text-sm text-muted-foreground">Pendientes</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Progress */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Progreso por Materia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjectStats.map((subject) => {
            const percentage = Math.round((subject.completed / subject.total) * 100);
            return (
              <div key={subject.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{subject.name}</span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{subject.completed}/{subject.total} tareas</span>
                    <span>{subject.hours}h estudiadas</span>
                  </div>
                </div>
                <Progress value={percentage} className="h-3" />
                <span className="text-xs text-muted-foreground">{percentage}% completado</span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
