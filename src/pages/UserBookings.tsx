import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Phone,
  Mail,
  Download,
  MoreVertical
} from "lucide-react";
import hotel1 from "@/assets/hotel1.jpg";
import hotel2 from "@/assets/hotel2.jpg";
import hotel3 from "@/assets/hotel3.jpg";

interface Booking {
  id: string;
  hotelName: string;
  hotelImage: string;
  location: string;
  rating: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  bookingDate: string;
  confirmationNumber: string;
}

const UserBookings = () => {
  const [filter, setFilter] = useState<"all" | "confirmed" | "pending" | "cancelled" | "completed">("all");

  // Sample bookings data
  const bookings: Booking[] = [
    {
      id: "1",
      hotelName: "Grand Royal Hotel",
      hotelImage: hotel1,
      location: "Tashkent City Center",
      rating: 4.5,
      checkIn: "2024-08-15",
      checkOut: "2024-08-17",
      guests: 2,
      totalAmount: 265,
      status: "confirmed",
      bookingDate: "2024-08-01",
      confirmationNumber: "HR12345"
    },
    {
      id: "2",
      hotelName: "Boutique Palace",
      hotelImage: hotel2,
      location: "Samarkand Historic District",
      rating: 4.7,
      checkIn: "2024-09-20",
      checkOut: "2024-09-23",
      guests: 2,
      totalAmount: 310,
      status: "pending",
      bookingDate: "2024-08-02",
      confirmationNumber: "BP67890"
    },
    {
      id: "3",
      hotelName: "Mountain View Resort",
      hotelImage: hotel3,
      location: "Chimgan Mountains",
      rating: 4.8,
      checkIn: "2024-07-10",
      checkOut: "2024-07-14",
      guests: 4,
      totalAmount: 745,
      status: "completed",
      bookingDate: "2024-06-15",
      confirmationNumber: "MV11223"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-hotel-success/10 text-hotel-success border-hotel-success/20";
      case "pending":
        return "bg-hotel-warning/10 text-hotel-warning border-hotel-warning/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "completed":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const filteredBookings = filter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === filter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Manage your hotel reservations and travel history</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {["all", "confirmed", "pending", "completed", "cancelled"].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "ghost"}
              onClick={() => setFilter(status as any)}
              className="capitalize whitespace-nowrap"
            >
              {status === "all" ? "All Bookings" : status}
            </Button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="text-6xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
                <p className="text-muted-foreground text-center mb-6">
                  {filter === "all" 
                    ? "You haven't made any hotel bookings yet. Start exploring amazing hotels!"
                    : `No ${filter} bookings found.`
                  }
                </p>
                <Button variant="hero" onClick={() => window.location.href = "/"}>
                  Browse Hotels
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredBookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Hotel Image */}
                    <div className="md:w-48 md:h-48 h-48 relative">
                      <img
                        src={booking.hotelImage}
                        alt={booking.hotelName}
                        className="w-full h-full object-cover"
                      />
                      <Badge 
                        className={`absolute top-3 right-3 ${getStatusColor(booking.status)}`}
                      >
                        {booking.status}
                      </Badge>
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {booking.hotelName}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{booking.location}</span>
                            <Star className="h-4 w-4 fill-hotel-rating text-hotel-rating ml-2" />
                            <span className="text-sm">{booking.rating}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Confirmation: {booking.confirmationNumber}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            ${booking.totalAmount}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {calculateNights(booking.checkIn, booking.checkOut)} nights
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Check-in</div>
                            <div className="text-sm text-muted-foreground">
                              {formatDate(booking.checkIn)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Check-out</div>
                            <div className="text-sm text-muted-foreground">
                              {formatDate(booking.checkOut)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Guests</div>
                            <div className="text-sm text-muted-foreground">
                              {booking.guests} {booking.guests === 1 ? "guest" : "guests"}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {booking.status === "confirmed" && (
                          <>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Voucher
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4 mr-2" />
                              Contact Hotel
                            </Button>
                          </>
                        )}
                        
                        {booking.status === "pending" && (
                          <>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Cancel Booking
                            </Button>
                          </>
                        )}

                        {booking.status === "completed" && (
                          <>
                            <Button variant="outline" size="sm">
                              Book Again
                            </Button>
                            <Button variant="ghost" size="sm">
                              Write Review
                            </Button>
                          </>
                        )}

                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBookings;