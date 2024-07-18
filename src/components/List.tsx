
import { TListItem } from '../types';
import './components.css'

interface ListProps {
  items: TListItem[];
}

function List({ items }: ListProps) {

  return (
    <>
      <div className='list'>
        {
          items.map((listItem, i) => (
            <div key={ i } className='list_item_area'>
              <div className='list_item_name blue_glow'>{ listItem.name }</div>
              {
                listItem.subItems.map((subItem, j) => (
                  <div key={ j }>
                    { subItem.label }<span className='red_glow'> __ </span>{ subItem.value }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
