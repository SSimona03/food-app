import Table from '../components/Table.jsx'
import Search from '../components/Search.jsx'
import Buttons from '../components/Buttons.jsx'

import { getDbConnection } from '../lib/database'

async function getItems() {
  const dbConnection = await getDbConnection();
  const db = await dbConnection.db("food-app");
  const itemsCollection = await db.collection('items');
  const items = await itemsCollection.find().toArray()
  return items
}

  export default async function HomeTable() {

    const items = await getItems();

    return (

        <div>
          <div className="items-btn-search">
                  <Buttons />
                  <Search />  
          </div>

          <Table items={JSON.parse(JSON.stringify(items))}/>
       
        
        </div>
    )
 } 



