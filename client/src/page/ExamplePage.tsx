import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Environment from '../graphql';
import { ExamplePageQuery } from '../__generated__/ExamplePageQuery.graphql';

import Question from '../components/Example/Question';

import withExample from '../hocs/withExample';

const ExamplePage: React.FC = () => (
  <QueryRenderer<ExamplePageQuery>
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
