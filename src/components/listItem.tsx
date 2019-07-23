import React from 'react'
import ListItemMaterial from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ListItem: React.SFC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  function handleListItemClick(event: any, index: number) {
    setSelectedIndex(index)
  }
  return (
    <ListItemMaterial
      button
      selected={selectedIndex === 0}
      onClick={event => handleListItemClick(event, 0)}
    >
      <ListItemText primary="Inbox" />
    </ListItemMaterial>
  )
}
export default ListItem
