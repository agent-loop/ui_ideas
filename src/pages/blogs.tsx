import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import { colorPalette } from '../../styles/colors';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: ${colorPalette.white};
  padding: 80px 20px;
`;

const Title = styled.h1`
  color: ${colorPalette.yellow};
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

const Meta = styled.div`
  text-align: center;
  font-size: 16px;
  color: ${colorPalette.yellow};
  opacity: 0.8;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 40px;
  position: relative;
  height: 300px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 18px;
`;

const blogPosts: Record<number, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  1: {
    title: "Building Meaningful Connections in the Digital Age",
    excerpt: "Discover how college students create lasting friendships using technology.",
    image: "/meaninful.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Community",
    content: [
      "College life is a unique phase where lasting friendships are often made.",
      "In today's digital age, students are leveraging platforms to build communities based on shared interests and values.",
      "These connections help students feel less isolated, especially in large campuses or during remote learning periods."
    ]
  },
  2: {
    title: "Privacy First: The Future of Social Networking",
    excerpt: "How Gingr is leading the charge in privacy-focused networking.",
    image: "/secured.png",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
    content: [
      "In the digital era, privacy is not a luxury, it's a necessity.",
      "Students are becoming more aware of the data they share online and are seeking platforms that prioritize security.",
      "Gingr has built its platform with privacy at the core, offering users complete control over their interactions."
    ]
  },
  3: {
    title: "Finding Your Tribe: Interest-Based Communities",
    excerpt: "How to build communities around shared academic and social interests.",
    image: "/interest_based.png",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Features",
    content: [
      "Being part of an interest-based community helps students engage deeply with topics they care about.",
      "These communities foster collaboration, idea exchange, and support networks that extend beyond the classroom.",
      "Gingr enables the creation of such spaces where students can thrive socially and intellectually."
    ]
  },
  4: {
    title: "The Power of Anonymous Expression",
    excerpt: "How anonymity can encourage honest and vulnerable conversations.",
    image: "/anym.png",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
    content: [
      "Sometimes, the best way to speak your truth is without a name attached.",
      "Anonymous platforms give users the freedom to express themselves without fear of judgment.",
      "This approach creates a safe space for sensitive topics, mental health discussions, and genuine peer support."
    ]
  }
};

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;

  const post = blogPosts[Number(id)];

  if (!post) return <PageContainer><Title>Blog not found</Title></PageContainer>;

  return (
    <PageContainer>
      <Title>{post.title}</Title>
      <Meta>
        {post.date} · {post.readTime} · {post.category}
      </Meta>
      <ImageWrapper>
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Content>
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Content>
    </PageContainer>
  );
}
