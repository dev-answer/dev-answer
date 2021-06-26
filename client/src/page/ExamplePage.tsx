import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Question from '../components/Example/Question';
import Environment from '../graphql';

import withExample from '../hocs/withExample';

const ExamplePage: React.FC = () => (
  <QueryRenderer
    environment={Environment}
    query={graphql`
      query ExamplePageQuery {
        allQuestions {
          id
          ...Question_question
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (!props) {
        return <div>...로딩중</div>;
      }

      if (error) {
        return <div>...에러발생</div>;
      }

      return (
        <div>
          {props.allQuestions.map((question) => <Question question={question} />)}
        </div>
      );
    }}
  />
);

export default withExample(ExamplePage);
