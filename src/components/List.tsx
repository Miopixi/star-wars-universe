
import { ListItem } from '../type-definitions';
import './components.css'

interface ListProps {
  items: ListItem[];
}

function List({ items }: ListProps) {

  return (
    <>
        {
          items.map((listItem, i) => (
            <div key={ i } className='list_item_area'>
              <div className='list_item_name'>{ listItem.name }</div>
              {
                listItem.subItems.map((subItem, j) => (
                  <div key={ j }>
                    { subItem.label } __ { subItem.value }
                  </div>
                ))
              }
            </div>
          ))
        }
    </>
  )
}

export default List
