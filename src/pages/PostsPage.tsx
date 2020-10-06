import React, { useEffect, useState } from 'react';
import IPost from "../models/IPost";
import { jsonClient } from "../api/JsonPlaceholderAPI";
import styled from "styled-components";

const CardTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const Card = styled.div`
  margin: 15px 15px 0 15px;
  padding: 5px;
  background-color: #d4d4d4;
`;

export default () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    jsonClient.getPosts().then((result) => {
      setPosts(result.data);
    })
  }, []);

  return (
    <div>
      {
        posts.map(p =>
          <Card>
            <div>
              <CardTitle>{p.title}</CardTitle>
              <p>{p.body}</p>
            </div>
          </Card>)
      }
    </div>
  )
};
