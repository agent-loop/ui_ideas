import { Typography as BaseTypography } from '@cred/neopop-web/lib/components';
import styled from 'styled-components';
import { colorPalette } from '../styles/colors';
import Image from 'next/image';

// Define FontType locally to fix missing import error
type FontType = 'heading' | 'body' | 'caption' | 'subtitle';

// Create a typed wrapper component around BaseTypography
interface TypographyProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontType: FontType;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function Typography(props: TypographyProps) {
  return <BaseTypography {...props} />;
}

const MainContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: ${colorPalette.white};
`;

const BlogHeader = styled.div`
  padding: 100px 20px 60px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
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
  margin-bottom: 10px;
  display: inline-block;
`;

const BlogCard = styled.article`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    border-color: ${colorPalette.yellow};
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);

    .blog-image {
      transform: scale(1.1);
    }

    ${BlogCategory} {
      background: rgba(255, 215, 0, 0.2);
    }
  }
`;

const BlogImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    transition: transform 0.3s ease;
  }
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogDate = styled.div`
  color: ${colorPalette.yellow};
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 0.8;
`;

const BlogReadMore = styled.a`
  display: inline-block;
  color: ${colorPalette.yellow};
  text-decoration: none;
  margin-top: 15px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateX(5px);
  }
`;

const blogs = [
  {
    id: 1,
    title: "Building Meaningful Connections in the Digital Age",
    excerpt: "Discover how college students are leveraging technology to create lasting friendships and professional networks in today's digital world.",
    image: "/meaninful.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Community",
  },
  {
    id: 2,
    title: "Privacy First: The Future of Social Networking",
    excerpt: "Why privacy-focused platforms are becoming increasingly important for students and how Gingr is leading the charge.",
    image: "/secured.png",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
  },
  {
    id: 3,
    title: "Finding Your Tribe: Interest-Based Communities",
    excerpt: "How to connect with like-minded students and build communities around shared interests and academic goals.",
    image: "/interest_based.png",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Features",
  },
  {
    id: 4,
    title: "The Power of Anonymous Expression",
    excerpt: "Understanding the benefits of anonymous communication in fostering open discussions and authentic connections.",
    image: "/anym.png",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Privacy & Security",
  },
];

export default function Blogs() {
  return (
    <MainContainer>
      <BlogHeader>
        <Typography
          color={colorPalette.yellow}
          fontSize={48}
          fontWeight={700}
          fontType="heading"
          style={{ marginBottom: '20px' }}
        >
          Gingr Blog
        </Typography>
        <Typography
          color={colorPalette.white}
          fontSize={20}
          fontWeight={400}
          fontType="body"
          style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}
        >
          Insights, stories, and tips for building meaningful college connections
        </Typography>
      </BlogHeader>

      <BlogGrid>
        {blogs.map(blog => (
          <BlogCard key={blog.id}>
            <BlogImage>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: 'cover' }}
                className="blog-image"
              />
            </BlogImage>
            <BlogContent>
              <BlogDate>
                {blog.date} · {blog.readTime}
              </BlogDate>
              <BlogCategory>{blog.category}</BlogCategory>
              <Typography
                color={colorPalette.white}
                fontSize={24}
                fontWeight={600}
                fontType="heading"
                style={{ marginBottom: '10px' }}
              >
                {blog.title}
              </Typography>
              <Typography
                color={colorPalette.white}
                fontSize={16}
                fontWeight={400}
                fontType="body"
                style={{ opacity: 0.8, marginBottom: '15px' }}
              >
                {blog.excerpt}
              </Typography>
              <BlogReadMore href={`/blogs/${blog.id}`}>
                Read More →
              </BlogReadMore>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </MainContainer>
  );
}
