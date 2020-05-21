import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A00482483432',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 9.00,
                orderNumber: 'A00482483433',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 1.30,
                orderNumber: 'A00482483434',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 10.80,
                orderNumber: 'A00482483435',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 7.20,
                orderNumber: 'A00482483436',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 6.80,
                orderNumber: 'A00482483438',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 3.25,
                orderNumber: 'A00482483439',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 8,
                total: 4.88,
                orderNumber: 'A00482483430',
                orderDate: new Date(),
                cerditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}