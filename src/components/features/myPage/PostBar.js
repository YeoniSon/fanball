import { useEffect, useState } from "react";
import {
  BarContainer,
  Container,
  Label,
  Value,
} from "../../../styles/myPage/PostBarStyled";

const PostBar = ({ currentUser }) => {
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState(null);

  useEffect(() => {
    const fetchBar = async () => {
      setLoading(true);
      try {
        const normalizeId = (val) => {
          if (val == null) return "";
          const match = String(val).match(/\d+/g);
          return match ? match.join("") : String(val);
        };
        const idStr = normalizeId(currentUser?.id);
        if (!idStr) {
          setSource(currentUser || null);
          return;
        }
        const res = await fetch(`/mockUsers.json`);
        const json = await res.json();
        const users = Array.isArray(json?.users) ? json.users : [];
        const user = users.find((u) => normalizeId(u?.id) === idStr) || null;
        setSource(user || currentUser || null);
      } catch {
        setSource(currentUser || null);
      } finally {
        setLoading(false);
      }
    };
    fetchBar();
  }, [currentUser]);

  const stats = [
    { key: "postCount", label: "작성 글", value: source?.postCount ?? 0 },
    {
      key: "commentCount",
      label: "작성 댓글",
      value: source?.commentCount ?? 0,
    },
    {
      key: "likesReceived",
      label: "받은 좋아요",
      value: source?.likesReceived ?? 0,
    },
    { key: "likesGiven", label: "즐겨찾기", value: source?.likesGiven ?? 0 },
  ];

  return (
    <BarContainer>
      {stats.map((stat) => (
        <Container key={stat.key}>
          <Value>{loading ? "Loading..." : stat.value}</Value>
          <Label>{stat.label} </Label>
        </Container>
      ))}
    </BarContainer>
  );
};

export default PostBar;
