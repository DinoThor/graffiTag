/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarker = /* GraphQL */ `
  query GetMarker($userOwner: String!) {
    getMarker(userOwner: $userOwner) {
      latLon
      url
      userOwner
      __typename
    }
  }
`;
export const listMarker = /* GraphQL */ `
  query ListMarker(
    $filter: TableMarkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarker(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        latLon
        url
        userOwner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
