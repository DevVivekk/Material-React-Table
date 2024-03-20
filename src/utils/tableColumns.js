import { useMemo } from "react";
export const Tablecolumns = ()=>{
    const columns = useMemo(
        () => [
          {
            accessorKey: 'id', //access nested data with dot notation
            header: 'Id',
            size: 150,
          },
          {
            accessorKey: 'name',
            header: 'Name',
            size: 150,
          },
          {
            accessorKey: 'subcategory', //normal accessorKey
            header: 'subcategory',
            size: 200,
          },
          {
            accessorKey: 'createdAt',
            accessorFn: (originalRow) => new Date(originalRow.createdAt),
            header: 'createdAt',
            size: 150,
            Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
          },
          {
            accessorKey: 'updatedAt',
            accessorFn: (originalRow) => new Date(originalRow.updatedAt),
            Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
            header: 'updatedAt',
            size: 150,
          },
          {
            accessorKey: 'price',
            header: 'price',
            size: 150,
            Cell: ({ cell }) =>
            cell.getValue().toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
            filterVariant: 'range-slider',
            muiFilterSliderProps: {
              max: 199, //custom max (as opposed to faceted max)
              min: 11, //custom min (as opposed to faceted min)
            }
          },
          {
            accessorKey: 'sale_price',
            header: 'sale_price',
            size: 150,
            filterVariant: 'range',
            filterFn: 'between',
            accessorFn: (originalRow) => (originalRow.sale_price ? originalRow.sale_price  : '00.00'), //must be strings
          }
        ],
        [],
      );
    return{
        columns
    }
}