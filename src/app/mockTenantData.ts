import { TenantStructure } from './tenant-structure';

export const mockTenantData: TenantStructure[] = [
    {
        roomNum: 201, tenantName1: '201-Name1', tenantName2: '201-Name2', tenantName3: null,
        tenantName4: null, tenantNumber1: '201-1', tenantNumber2: '201-2', tenantNumber3: null,
        tenantNumber4: null, advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 202, tenantName1: '202-Name1', tenantName2: '202-Name2', tenantName3: '202-Name3',
        tenantName4: null, tenantNumber1: '201-1', tenantNumber2: '201-2', tenantNumber3: '202-3',
        tenantNumber4: null, advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 203, tenantName1: '203-Name1', tenantName2: '203-Name2', tenantName3: '203-Name3',
        tenantName4: null, tenantNumber1: '203-1', tenantNumber2: '203-2', tenantNumber3: '203-3',
        tenantNumber4: null, advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 204, tenantName1: '204-Name1', tenantName2: '204-Name2', tenantName3: '204-Name3',
        tenantName4: '204-Name4', tenantNumber1: '201-1', tenantNumber2: '201-2', tenantNumber3: '202-3',
        tenantNumber4: '204-4', advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 205, tenantName1: null, tenantName2: null, tenantName3: null,
        tenantName4: null, tenantNumber1: null, tenantNumber2: null, tenantNumber3: null,
        tenantNumber4: null, advanceAmount: 0, rentAmount: 0, electricityBill: 0, miscAmount: 0, empty: 'Yes'
    },
    {
        roomNum: 301, tenantName1: '301-Name1', tenantName2: null, tenantName3: null,
        tenantName4: null, tenantNumber1: '301-1', tenantNumber2: null, tenantNumber3: null,
        tenantNumber4: null, advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 302, tenantName1: '302-Name1', tenantName2: '302-Name2', tenantName3: null,
        tenantName4: null, tenantNumber1: '302-1', tenantNumber2: '302-2', tenantNumber3: null,
        tenantNumber4: null, advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No'
    },
    {
        roomNum: 303, tenantName1: '303-Name1', tenantName2: '303-Name2', tenantName3: null,
        tenantName4: null, tenantNumber1: '303-1', tenantNumber2: '303-2', tenantNumber3: null,
        tenantNumber4: null, advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No'
    }
];
