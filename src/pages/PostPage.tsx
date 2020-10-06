import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { jsonClient } from "../api/JsonPlaceholderAPI";
import IPost from "../models/IPost";
import styled from "styled-components";

const Card = styled.div`
  margin: 15px 15px 0 15px;
  padding: 15px;
  background-color: #d4d4d4;
`;

const CardTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const HorizontalSeparator = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 15px 10px;
  background-color: #3faddb;
  border-color: #3faddb;
  padding: 16px 32px;
  border-radius: 6px;
`;

const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export default () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    jsonClient.getPost(id).then((result) => {
      setPost(result.data);
    })
  }, []);

  return (
    <div>
      <Card>
        <HorizontalSeparator>
          <CardTitle>{post?.title}</CardTitle>
          <p>ID:{post?.id}</p>
        </HorizontalSeparator>
        <p>User ID:{post?.userId}</p>
        <p>{post?.body}</p>
      </Card>

      <Button onClick={() => {
        window.postMessage({ message: 'pin' }, '*')
      }}>
        <ButtonText>
          Pin
        </ButtonText>
      </Button>

      <Button onClick={() => {
        window.postMessage({ message: 'unpin' }, '*')
      }}>
        <ButtonText>
          Unpin
        </ButtonText>
      </Button>
    </div>
  )
};
