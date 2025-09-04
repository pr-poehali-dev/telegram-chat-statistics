import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Mock data для демонстрации
  const chatStats = {
    totalMessages: 15847,
    totalUsers: 234,
    averageDaily: 89,
    onlineUsers: 12,
    topUsers: [
      { name: "Александр", messages: 1247, avatar: "🏆", status: "online" },
      { name: "Мария", messages: 987, avatar: "⭐", status: "online" },
      { name: "Иван", messages: 823, avatar: "🔥", status: "offline" },
      { name: "Анна", messages: 745, avatar: "💎", status: "online" },
      { name: "Дмитрий", messages: 678, avatar: "⚡", status: "offline" }
    ],
    recentMessages: [
      { user: "Александр", message: "Отличная игра! Когда следующий турнир?", time: "2 мин назад", avatar: "🏆" },
      { user: "Мария", message: "Согласна, очень захватывающе было", time: "5 мин назад", avatar: "⭐" },
      { user: "Иван", message: "Кто-нибудь знает расписание на завтра?", time: "8 мин назад", avatar: "🔥" },
      { user: "Анна", message: "Всем привет! Как дела?", time: "12 мин назад", avatar: "💎" }
    ],
    activityData: [
      { hour: "00:00", messages: 3 },
      { hour: "06:00", messages: 12 },
      { hour: "12:00", messages: 45 },
      { hour: "18:00", messages: 89 },
      { hour: "20:00", messages: 67 },
      { hour: "22:00", messages: 34 }
    ]
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BlueLock Rivals Analytics
          </h1>
          <p className="text-muted-foreground text-lg">
            Статистика телеграм чата в реальном времени
          </p>
        </div>

        {/* Общая статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Всего сообщений
                </CardTitle>
                <Icon name="MessageCircle" className="text-primary" size={16} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatStats.totalMessages.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Icon name="TrendingUp" size={12} className="mr-1 text-green-500" />
                +12% от прошлой недели
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Участников
                </CardTitle>
                <Icon name="Users" className="text-primary" size={16} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatStats.totalUsers}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Icon name="UserPlus" size={12} className="mr-1 text-blue-500" />
                {chatStats.onlineUsers} онлайн
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Среднее в день
                </CardTitle>
                <Icon name="BarChart3" className="text-primary" size={16} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatStats.averageDaily}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Icon name="Clock" size={12} className="mr-1 text-yellow-500" />
                сообщений/день
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Активность
                </CardTitle>
                <Icon name="Activity" className="text-primary" size={16} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">Высокая</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Icon name="Zap" size={12} className="mr-1 text-green-500" />
                Пик активности
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Топ пользователи */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" className="text-primary" size={20} />
                Топ пользователи
              </CardTitle>
              <CardDescription>
                Самые активные участники чата
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {chatStats.topUsers.map((user, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="text-xl">{user.avatar}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <Badge variant={user.status === 'online' ? 'default' : 'secondary'} className="text-xs">
                        {user.status === 'online' ? 'онлайн' : 'офлайн'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {user.messages} сообщений
                      </p>
                      <div className="text-xs text-primary font-medium">
                        #{index + 1}
                      </div>
                    </div>
                    <Progress 
                      value={(user.messages / chatStats.topUsers[0].messages) * 100} 
                      className="h-1"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Активность и последние сообщения */}
          <div className="lg:col-span-2 space-y-6">
            {/* График активности */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                  Активность по времени
                </CardTitle>
                <CardDescription>
                  Количество сообщений в течение дня
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {chatStats.activityData.map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div 
                        className="bg-gradient-to-t from-primary to-primary/50 rounded-sm mx-auto"
                        style={{ 
                          height: `${(item.messages / 89) * 60}px`,
                          minHeight: '4px',
                          width: '100%'
                        }}
                      />
                      <div className="text-xs text-muted-foreground">{item.hour}</div>
                      <div className="text-xs font-medium">{item.messages}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Icon name="Info" size={12} className="mr-1" />
                  Пик активности: 18:00 - 20:00
                </div>
              </CardContent>
            </Card>

            {/* Последние сообщения */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={20} />
                  Последние сообщения
                </CardTitle>
                <CardDescription>
                  Актуальная активность в чате
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {chatStats.recentMessages.map((msg, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="text-lg mt-1">{msg.avatar}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{msg.user}</p>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm text-foreground/80">{msg.message}</p>
                      </div>
                    </div>
                    {index < chatStats.recentMessages.length - 1 && (
                      <Separator className="opacity-50" />
                    )}
                  </div>
                ))}
                
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Icon name="RefreshCw" size={16} className="mr-2 animate-spin" />
                    Обновление в реальном времени...
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Последнее обновление: {new Date().toLocaleString('ru-RU')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;