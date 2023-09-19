import {useEffect, useState} from "react";
import TopicListing from "../layouts/TopicListing";
import Topic from "../organisms/Topic";
import axios from "axios";

type TopicObject = {
  id: string,
  technology: string,
  name: string,
  difficulty: string,
  logoUrl: string
};

const Listing = () => {
  const [topics, setTopics] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const getTopics = async () => {
    return await axios.get(`${API_URL}/api/topic`);
  }

  useEffect(() => {
    getTopics().then(({data}) => {
      setTopics(data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const topicElements = topics.map((topic: TopicObject) => {
    return <Topic
      technology={topic.technology}
      name={topic.name}
      difficulty={topic.difficulty}
      logoUrl={topic.logoUrl}
      key={topic.id}
    />
  });

  return (
    <TopicListing>
      {topicElements}
    </TopicListing>
  )
};

export default Listing;
