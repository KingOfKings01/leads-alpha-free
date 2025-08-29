import React from 'react'
import DetailCard from '../components/DetailCard'
import image from '../assets/faq/image.jpg'
import CTASection from '../components/Home/CTASection'
import FAQItem from '../components/Lab/FAQItem'
export default function FAQCreators() {
  const faqs = [
    {
      question: "Why should I work with Leads Alpha?",
      answer:
        "Hey there! As a UGC Creator with Leads Alpha, you’ll get the chance to dive into some cool projects with a mix of small and big brands. You’ll receive products to try out, sharpen your skills in creating and editing content, and pick up tips on how to connect with customers. Plus, you can make some money from your creativity! And don’t worry—our team is always here for you if you have any questions or need a bit of guidance. We're excited to have you on board!"
    },
    {
      question: "Should I also post the content I create on my social platforms?",
      answer:
        "Yes, sharing your content on your own platforms helps build your personal brand and increases visibility for both you and the brands you collaborate with."
    },
    {
      question: "How much will I earn per video?",
      answer:
        "Earnings vary depending on the brand, project, and your level of experience. You’ll be informed of payment details before you start a project."
    },
    {
      question: "What if a brand wants ADD-ONS?",
      answer:
        "Brands may request additional deliverables such as extra edits, shorter clips, or multiple versions. These are typically compensated separately."
    },
    {
      question: "How do I get paid for my work?",
      answer:
        "Payments are processed through secure transfer once the brand has approved your content. You’ll always be notified when payments are scheduled."
    },
    {
      question: "How can I earn more?",
      answer:
        "You can earn more by consistently delivering high-quality content, collaborating with multiple brands, and expanding your creative skill set."
    },
    {
      question: "How can I make better quality content?",
      answer:
        "Focus on good lighting, clear audio, and storytelling. Stay up-to-date with trends and always aim to create engaging, relatable content."
    },
    {
      question: "What if I want time off?",
      answer:
        "You’re free to take time off whenever needed. Just make sure to decline or pause new projects during that period."
    },
    {
      question: "Can I work with the brand privately off the Leads Alpha platform?",
      answer:
        "No, all collaborations should go through the platform to ensure fair payment, protection, and proper tracking of your work."
    },
    {
      question: "How does one obtain verification with a blue checkmark on their profile?",
      answer:
        "Verification depends on platform-specific requirements. Leads Alpha can guide you on best practices to build your credibility and potentially qualify for verification."
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
              initialOpen={index==0}
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
