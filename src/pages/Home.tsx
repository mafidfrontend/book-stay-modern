import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/search/SearchBar";
import HotelCardList from "@/components/hotels/HotelCardList";
import heroImage from "@/assets/hotel-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 z-10" />
        <div 
          className="h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Find Your Perfect
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Hotel Stay
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-90">
              Discover amazing hotels worldwide with the best prices and premium service
            </p>
          </div>
        </div>
        
        {/* Search Bar Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
          <div className="max-w-6xl mx-auto px-4">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <HotelCardList />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Hotelify?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the best hotel booking experience with premium features and unmatched service quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Hotels</h3>
              <p className="text-muted-foreground">
                Handpicked luxury hotels with the highest quality standards and exceptional service
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-muted-foreground">
                Guaranteed lowest prices with exclusive deals and special offers for our members
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Booking</h3>
              <p className="text-muted-foreground">
                Safe and secure booking process with instant confirmation and 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;