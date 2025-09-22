const NoticeSection = () => {
  return (
    <Section>
      <Container>
        <Title>공지사항</Title>
        <NoticeList />
        <MoreButton to="/notices">더보기</MoreButton>
      </Container>
    </Section>
  );
};

export default NoticeSection;
