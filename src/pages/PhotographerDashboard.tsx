
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar as CalendarIcon, Clock, Camera, UserCheck, Star, Banknote, ChevronRight, ChevronDown, Users, TrendingUp, Settings, MessageSquare, Bell, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the dashboard
const bookingsData = [
  {
    id: 1,
    client: "Emma Johnson",
    date: "April 10, 2025",
    time: "10:00 AM",
    package: "Half-Day Adventure",
    location: "Eiffel Tower, Paris",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    client: "James Wilson",
    date: "April 12, 2025",
    time: "4:00 PM",
    package: "Social Media Package",
    location: "Montmartre, Paris",
    status: "pending",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    client: "Sophia Lee",
    date: "April 15, 2025",
    time: "2:30 PM",
    package: "Basic Portrait Session",
    location: "Louvre Museum, Paris",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    client: "Michael Brown",
    date: "April 18, 2025",
    time: "9:00 AM",
    package: "Half-Day Adventure",
    location: "Champs-Élysées, Paris",
    status: "pending",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

const messagesData = [
  {
    id: 1,
    client: "Emma Johnson",
    message: "Hi there! I'm excited about our upcoming photoshoot. Can we discuss some specific poses I have in mind?",
    time: "2h ago",
    unread: true,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    client: "James Wilson",
    message: "I'm considering booking your Social Media Package. Do you have availability next month?",
    time: "Yesterday",
    unread: false,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    client: "Sophia Lee",
    message: "Thanks for confirming! I'm looking forward to our shoot at the Louvre.",
    time: "2 days ago",
    unread: false,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  }
];

const revenueData = [
  { month: 'Jan', revenue: 2100 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2400 },
  { month: 'Apr', revenue: 2700 },
  { month: 'May', revenue: 3200 },
  { month: 'Jun', revenue: 3800 },
];

const statsData = [
  { name: 'Profile Views', value: 1245, icon: Users, increase: '+12%', color: 'bg-blue-100 text-blue-600' },
  { name: 'Bookings', value: 28, icon: Camera, increase: '+8%', color: 'bg-green-100 text-green-600' },
  { name: 'Average Rating', value: '4.9', icon: Star, increase: '+0.1', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Monthly Revenue', value: '$3,800', icon: Banknote, increase: '+15%', color: 'bg-purple-100 text-purple-600' }
];

const PhotographerDashboard = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPending, setShowPending] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1">
        <div className="container-custom py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Photographer Dashboard</h1>
              <p className="text-gray-600">Welcome back, Alex. Here's what's happening with your photography business.</p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button className="bg-sunset-500 hover:bg-sunset-600">
                <Camera className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statsData.map((stat, index) => (
              <Card key={index}>
                <CardContent className="flex items-center p-6">
                  <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mr-4`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                    <div className="flex items-end gap-2">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <span className="text-xs text-green-500 font-medium flex items-center">
                        {stat.increase}
                        <TrendingUp className="h-3 w-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="bookings">
            <TabsList className="mb-8">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-6">
              {/* Upcoming Bookings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Bookings
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowUpcoming(!showUpcoming)}
                  >
                    {showUpcoming ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                </div>

                {showUpcoming && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {bookingsData.filter(booking => booking.status === 'confirmed').map(booking => (
                      <Card key={booking.id}>
                        <CardContent className="p-0">
                          <div className="flex items-start p-4 border-b">
                            <img 
                              src={booking.image} 
                              alt={booking.client} 
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                              <h3 className="font-medium">{booking.client}</h3>
                              <p className="text-sm text-gray-600">{booking.package}</p>
                            </div>
                          </div>
                          <div className="p-4 space-y-3">
                            <div className="flex items-center text-sm">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.date}</span>
                              <span className="mx-2 text-gray-500">•</span>
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.location}</span>
                            </div>
                            <div className="flex justify-between pt-2">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                Message
                              </Button>
                              <Button size="sm" className="bg-sunset-500 hover:bg-sunset-600">View Details</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Pending Approvals */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <UserCheck className="h-5 w-5 mr-2" />
                    Pending Approvals
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowPending(!showPending)}
                  >
                    {showPending ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                </div>

                {showPending && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bookingsData.filter(booking => booking.status === 'pending').map(booking => (
                      <Card key={booking.id}>
                        <CardContent className="p-0">
                          <div className="flex items-start p-4 border-b">
                            <img 
                              src={booking.image} 
                              alt={booking.client} 
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                              <h3 className="font-medium">{booking.client}</h3>
                              <p className="text-sm text-gray-600">{booking.package}</p>
                            </div>
                          </div>
                          <div className="p-4 space-y-3">
                            <div className="flex items-center text-sm">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.date}</span>
                              <span className="mx-2 text-gray-500">•</span>
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{booking.location}</span>
                            </div>
                            <div className="flex justify-between gap-2 pt-2">
                              <Button variant="outline" size="sm" className="flex-1">Decline</Button>
                              <Button size="sm" className="bg-sunset-500 hover:bg-sunset-600 flex-1">Accept</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-12">
                    <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Calendar View</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      This would display a full calendar view with all bookings, availability, and blocked dates. 
                      You could integrate with a calendar component like react-big-calendar or similar.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Messages</CardTitle>
                  <Button size="sm" variant="outline">
                    <Bell className="h-4 w-4 mr-2" /> Mark All Read
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messagesData.map(message => (
                      <div 
                        key={message.id} 
                        className={`p-4 rounded-lg ${message.unread ? 'bg-sunset-50 border-l-4 border-sunset-500' : 'bg-gray-50 dark:bg-gray-800'}`}
                      >
                        <div className="flex items-start">
                          <img 
                            src={message.image} 
                            alt={message.client} 
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{message.client}</h3>
                              <span className="text-xs text-gray-500">{message.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button size="sm" className="bg-sunset-500 hover:bg-sunset-600">
                            Reply
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={revenueData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                        <Bar dataKey="revenue" fill="#F97316" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Conversion Rate</span>
                          <span className="font-bold">24%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-sunset-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Profile Completion</span>
                          <span className="font-bold">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-sunset-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Response Rate</span>
                          <span className="font-bold">97%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-sunset-500 h-2 rounded-full" style={{ width: '97%' }}></div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <Button className="w-full bg-sunset-500 hover:bg-sunset-600">
                          View Full Analytics
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhotographerDashboard;
