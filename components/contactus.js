export default function ContactUs() {
    return (
      <div className="max-w-6xl mx-auto mb-6 pb-6 px-4 sm:px-6 lg:px-8" id="contactus">
        <p className="text-gray-700 text-lg mb-6">
          Have questions or need more information? Feel free to reach out to us.
          Our friendly team is here to assist you with any inquiries or concerns
          you may have.
        </p>
        <p className="text-gray-700 text-lg">
          Email us at:{" "}
          <a
            href="mailto:thinklifecare@gmail.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            thinklifecare@gmail.com
          </a>
        </p>
        <p className="text-gray-700 text-lg">
        Call us at:{" "}
        <a
          href="tel:+1234567890"
          className="text-blue-500 underline hover:text-blue-700"
        >
          +1 (234) 567-890
        </a>
      </p>
      </div>
    );
  }
  