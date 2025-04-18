import Hero from "../components/hero-slider";
import ChooseUs from "../components/chooseus";
import AboutUs from "../components/about";
import Story1 from "../components/story1";
import Story2 from "../components/story2";
import ContactUs from "../components/contactus";
import SectionTitle from "../components/Section-title";
import ProductCard from "../components/video";
import TestimonialSlider from "../components/testimonial-slider";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-grow">
        <section className="mx-auto">
          <Hero />
          <div className="max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 text-lg mb-6">
              Welcome to ThinkLife&reg;, your premier source for Superbeena,
              also known as Talbina—a powerful, nutrient-dense superfood made
              from a unique blend of 13 superfoods. At ThinkLife, we're
              committed to enhancing your well-being with natural solutions that
              support your health goals.
            </p>
          </div>
          <SectionTitle value="Why Choose Us?" />
          <ChooseUs />
          <Story1 />
          <SectionTitle value="About Us" />
          <AboutUs />
          <Story2 />
          <SectionTitle value="Contact Us" />
          <ContactUs />
          <SectionTitle value="Explore and Shops" />
          <div className="mt-10 max-w-6xl lg:mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:m-5">
            <ProductCard
              videoSrc="/videos/body_builder_new.mp4"
              imageSrc="/images/DSC_1277-removebg-preview.png"
              price="270RS/-"
              href="https://www.google.com"
              title="200gm small pack"
              videoTitle="Customer Feedback"
            />
            <ProductCard
              videoSrc="/videos/body_builder_old.mp4"
              imageSrc="/images/DSC_8952-removebg-preview.png"
              price="530RS/-"
              href="https://www.google.com"
              title="400gm large pack"
              videoTitle="Customer Feedback"
            />
            <ProductCard
              videoSrc="/videos/Superbeena_making_video.mp4"
              imageSrc="/images/DSC_1277-removebg-preview.png"
              price="270RS/-"
              href="https://www.google.com"
              title="200gm small pack"
              videoTitle="How to make it?"
            />
            <ProductCard
              videoSrc="/videos/Thinklife_Gym_Promo.mp4"
              imageSrc="/images/DSC_8952-removebg-preview.png"
              price="530RS/-"
              href="https://www.google.com"
              title="400gm large pack"
               videoTitle="THINKLife Care Campagn"
            />
          </div>
          <SectionTitle value="Customer Feedback" />
          <div className="text-black bg-white flex items-center justify-center mb-20">
            <TestimonialSlider />
          </div>
        </section>
      </main>
    </div>
  );
}
