import Hero from "../components/hero/Hero";
import Location from "../assets/contact/location-icon.svg";
import Phone from "../assets/contact/phone-icon.svg";
import Clock from "../assets/contact/clock-icon.svg";
import FormContact from "../components/contact/FormContact";
import Seals from "../components/seals/Seals";

const Contact = () => {
  return (
    <>
      <Hero title="Contact Us" firstPath="Home" secondPath="Contact" />
      <main className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Get In Touch With Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <section className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
          <ul className="space-y-8 lg:space-y-0 lg:flex lg:flex-col lg:gap-8">
            <li className="flex items-start gap-4">
              <img src={Location} alt="Location" className="w-8 h-8" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Address</h2>
                <p className="text-sm sm:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img src={Phone} alt="Phone" className="w-8 h-8" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Phone</h2>
                <p className="text-sm sm:text-base">Mobile: +(84) 546-6789</p>
                <p className="text-sm sm:text-base">Hotline: +(84) 456-6789</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img src={Clock} alt="Clock" className="w-8 h-8" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  Working Time
                </h2>
                <p className="text-sm sm:text-base">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-sm sm:text-base">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </li>
          </ul>
          <FormContact />
        </section>
      </main>
      <Seals />
    </>
  );
};

export default Contact;
