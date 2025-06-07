import { Typography } from '@cred/neopop-web/lib/components';
import styled from 'styled-components';
import { colorPalette } from '../../styles/colors';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MainContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: ${colorPalette.white};
`;

const BlogHeader = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9));
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const BlogContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BlogCategory = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: ${colorPalette.yellow};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 20px;
  display: inline-block;
`;

const BlogDate = styled.div`
  color: ${colorPalette.yellow};
  font-size: 14px;
  margin: 15px 0;
  opacity: 0.8;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${colorPalette.yellow};
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 30px;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(-5px);
  }
`;

const Paragraph = styled(Typography)`
  margin-bottom: 20px;
  line-height: 1.8;
`;

const blogPosts = {
  1: {
    title: "Building Meaningful Connections in the Digital Age",
    excerpt: "Discover how college students are leveraging technology to create lasting friendships and professional networks in today's digital world.",
    image: "/meaninful.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Community",
    content: [
      "In today's fast-paced digital world, building meaningful connections has become both more accessible and more challenging than ever before. College students, in particular, face unique opportunities and obstacles when it comes to forming lasting relationships in the digital age.",
      "Technology has revolutionized the way we connect with others. While social media platforms have made it easier to stay in touch, they often lack the depth and authenticity that genuine relationships require. This is where Gingr steps in, offering a unique approach to digital connections that prioritizes meaningful interactions over superficial engagements.",
      "One of the key aspects of building meaningful connections is finding common ground. Through Gingr's interest-based matching system, students can connect with peers who share their academic interests, career aspirations, or personal hobbies. This targeted approach helps foster more meaningful initial interactions that can develop into lasting friendships.",
      "The platform also encourages face-to-face meetings within the safety of the college community. While digital connections are important, they should serve as a bridge to real-world relationships rather than a replacement. Gingr's events feature and community meetups facilitate this transition from online to offline connections.",
      "Privacy and authenticity are at the core of meaningful connections. Unlike traditional social media platforms, Gingr provides a safe space where students can be themselves without the pressure of maintaining a curated online presence. This authenticity leads to more genuine connections and deeper relationships."
    ]
  },
  2: {
    title: "Privacy First: The Future of Social Networking",
    excerpt: "Why privacy-focused platforms are becoming increasingly important for students and how Gingr is leading the charge.",
    image: "/secured.png",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
    content: [
      "In an era where data breaches and privacy concerns are making headlines, the importance of privacy-focused social networking platforms cannot be overstated. Students, in particular, are becoming increasingly aware of the need to protect their digital footprint while staying connected.",
      "Traditional social media platforms have often prioritized data collection and targeted advertising over user privacy. This approach has led to growing concerns about how personal information is being used and shared. Gingr takes a fundamentally different approach by putting privacy at the forefront of its platform design.",
      "Zero data storage is one of the key features that sets Gingr apart. Unlike other platforms that store user data indefinitely, Gingr ensures that conversations and interactions remain temporary and secure. This approach not only protects user privacy but also encourages more authentic and meaningful interactions.",
      "The platform's commitment to privacy extends to its anonymous chatting feature, which allows students to express themselves freely without fear of judgment or future repercussions. This is particularly important in academic settings where students might want to discuss sensitive topics or seek advice without revealing their identity.",
      "Looking ahead, privacy-focused platforms like Gingr are setting new standards for social networking. As students become more privacy-conscious, the demand for secure, trustworthy platforms will only continue to grow. Gingr is proud to be at the forefront of this movement, proving that social connection and privacy can coexist harmoniously."
    ]
  },
  3: {
    title: "Finding Your Tribe: Interest-Based Communities",
    excerpt: "How to connect with like-minded students and build communities around shared interests and academic goals.",
    image: "/interest_based.png",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Features",
    content: [
      "One of the most exciting aspects of college life is discovering and connecting with people who share your interests and passions. Gingr's interest-based communities feature makes this process easier and more meaningful than ever before.",
      "The platform's sophisticated matching algorithm goes beyond simple keyword matching. It analyzes patterns in user interactions, academic interests, and extracurricular activities to suggest connections that are likely to be meaningful and lasting. This approach helps students find their 'tribe' - people who truly understand and share their passions.",
      "Interest-based communities on Gingr span a wide range of categories, from academic subjects and career aspirations to hobbies and cultural interests. These communities serve as virtual meeting spaces where students can engage in discussions, share resources, and organize events around their shared interests.",
      "The beauty of interest-based matching lies in its ability to break down traditional social barriers. Students from different years, departments, or even colleges can connect based on shared interests, creating diverse and enriching communities that might not have formed otherwise.",
      "Success stories from Gingr users demonstrate the power of interest-based connections. From study groups that evolved into lasting friendships to hobby clubs that expanded into campus-wide organizations, these communities are fostering meaningful relationships and enhancing the college experience."
    ]
  },
  4: {
    title: "The Power of Anonymous Expression",
    excerpt: "Understanding the benefits of anonymous communication in fostering open discussions and authentic connections.",
    image: "/anym.png",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
    content: [
      "Anonymity in online communication often gets a bad rap, but when implemented thoughtfully, it can be a powerful tool for fostering authentic connections and meaningful discussions. Gingr's anonymous chatting feature is designed to create safe spaces for honest expression while maintaining community standards.",
      "For many students, the ability to communicate anonymously provides the freedom to discuss sensitive topics, seek advice, or share experiences without fear of judgment. This is particularly valuable in academic settings where students might hesitate to ask questions or express concerns under their real identity.",
      "Gingr's approach to anonymous communication is unique because it balances privacy with accountability. While users can interact anonymously, the platform maintains community guidelines and moderation systems to ensure that these interactions remain respectful and constructive.",
      "The platform has seen numerous examples of how anonymous communication can lead to meaningful connections. From students finding study partners through anonymous academic discussions to individuals receiving support and advice on personal matters, these interactions often evolve into lasting friendships.",
      "As we continue to navigate the digital age, the importance of having safe spaces for anonymous expression becomes increasingly clear. Gingr is committed to maintaining this balance between privacy and community, ensuring that students can express themselves freely while building meaningful connections."
    ]
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogPosts[Number(id)];

  if (!post) return null;

  return (
    <MainContainer>
      <BlogHeader>
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <HeaderContent>
          <BlogCategory>{post.category}</BlogCategory>
          <Typography
            color={colorPalette.white}
            fontSize={40}
            fontWeight={700}
            fontType="heading"
          >
            {post.title}
          </Typography>
          <BlogDate>
            {post.date} · {post.readTime}
          </BlogDate>
        </HeaderContent>
      </BlogHeader>

      <BlogContent>
        <BackButton href="/blogs">
          ← Back to Blogs
        </BackButton>
        
        <Typography
          color={colorPalette.white}
          fontSize={20}
          fontWeight={500}
          fontType="body"
          style={{ 
            opacity: 0.9,
            marginBottom: '40px',
            lineHeight: 1.6
          }}
        >
          {post.excerpt}
        </Typography>

        {post.content.map((paragraph, index) => (
          <Paragraph
            key={index}
            color={colorPalette.white}
            fontSize={18}
            fontWeight={400}
            fontType="body"
            style={{ opacity: 0.8 }}
          >
            {paragraph}
          </Paragraph>
        ))}
      </BlogContent>
    </MainContainer>
  );
} 