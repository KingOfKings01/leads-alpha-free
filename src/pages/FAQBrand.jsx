import DetailCard from '../components/DetailCard'
import image from '../assets/faq/image.jpg'
import CTASection from '../components/Home/CTASection'
import FAQItem from '../components/Lab/FAQItem'
export default function FAQBrand() {
  const faqs = [
    {
      question: "What benefits does my brand gain from Leads Alpha?",
      answer:
        "Video marketing stands out as the most powerful approach to crafting captivating ads and highlighting your products. Our talented creators will collaborate closely with your brand to produce genuine user-generated content for your website, e-commerce platform, mobile app, as well as Meta and TikTok."
    },
    {
      question: "Will creators share the videos they’ve made on their personal social media accounts?",
      answer: "This depends on the agreement with the creator. Some may share on their profiles, others may not."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up on our platform, create your first project brief, and connect with creators."
    },
    {
      question: "How do I remove the watermark on my video or photos?",
      answer: "Watermarks are removed once the project is completed and approved by both you and the creator."
    },
    {
      question: "What if I’m not happy with the content delivered?",
      answer: "You can request revisions or work with another creator depending on your project agreement."
    },
    {
      question: "What steps should I take if I’d like to collaborate on another video with the same creator?",
      answer: "You can easily start a new project and select the same creator from your previous collaborations."
    },
    {
      question: "Do I get charged for cancelling an order?",
      answer: "Cancellation policies may vary by project stage. Please review before cancelling."
    },
    {
      question: "How long does it take to receive my video?",
      answer: "Delivery timelines depend on the project scope but typically range from 3 to 7 business days."
    },
    {
      question: "What’s the window period for revisions after I receive the video?",
      answer: "You usually have 3–5 business days to request revisions after receiving the content."
    }
  ];


  return (
    <>
      <section>
        <DetailCard
          title={
            <>
              Have A Question In Mind?{" "}
              <span className="text-[#1E60DB] block">
                We’re Here To Help
              </span>{" "}
              You
            </>
          }
          description="For comprehensive details and answers to your questions, we encourage you to explore our Frequently Asked Questions (FAQ) section, where you'll find a wealth of information covering all topics. If you need further assistance or have specific inquiries that aren’t addressed, please don’t hesitate to reach out to our dedicated support team. The team is available to provide you with personalised help and guidance to ensure you have the best experience possible."
          image={image}
        />
      </section>

      <section className='flex flex-col md:flex-row! gap-10 md:gap-20! px-6 lg:px-24 py-12'>
        <h1 className="text-2xl lg:text-4xl font-semibold leading-snug text-gray-900">
          Frequently Asked{" "}
          <span className="text-[#1E60DB] block">
            Questions
          </span>
        </h1>
        <div className='flex-1'>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initialOpen={index == 0}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
      <section>
        <CTASection />
      </section>
    </>
  )
}
