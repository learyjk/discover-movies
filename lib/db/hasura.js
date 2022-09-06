async function queryHasuraGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_URL, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    stats {
      favorited
      id
      userId
      videoId
      watched
    }
  }
`;

function fetchMyQuery() {
  return queryHasuraGraphQL(operationsDoc, "MyQuery", {});
}

function executeMyMutation() {
  return queryHasuraGraphQL(operationsDoc, "MyMutation", {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

//startFetchMyQuery();

export async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

//startExecuteMyMutation();
