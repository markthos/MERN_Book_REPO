import { gql } from '@apollo/client';

export const getMe = gql`
    query me {
        me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
        }
    }

`;

export const getUsers = gql`
    query users {
        users {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }

`;

