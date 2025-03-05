import styled from 'styled-components';

interface Props {
  title: string;
  description: string[];
  backgroundColor?: string;
}

const BussinessCardArticle = ({ title, description, backgroundColor }: Props) => {
  return (
    <CardContainer>
      <CardTitle style={{ backgroundColor }}>{title}</CardTitle>
      <CardContent>
        {description.map((desc, index) => (
          <ListItem key={index}>{desc}</ListItem>
        ))}
      </CardContent>
    </CardContainer>
  );
};

export default BussinessCardArticle;

const CardContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.4;
  opacity: 0.9;
`;
