# Header_task


Task from Marius: Create the app's header.

I've used React Navigation in order to create a navigation and a Header for screens. I used vector icons for search and menu icons from the right side of the screen. 

Header.js
```
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={styles.headerText}>Marcas</Text>
      </View>
      <View style={styles.icons}>
        <Icon
          name="bars"
          size={20}
          color="#fcba03"
          style={styles.iconMargins}
        />
        <Icon name="search" size={20} color="#fcba03" />
      </View>
    </View>
  );
}
```

Also, I've played a bit around with the react navigation's backbutton. 
Replaced the default icon with another one using a custom component "CustomHeaderBackImage".


App.js
```
class CustomHeaderBackImage extends React.Component<any, any> {
  render() {
    const source = require('./src/assets/back.png');
    return (
      <Image
        source={source}
        style={[styles.myCustomHeaderBackImage, this.props.style]}
      />
    );
  }
}

```

It just returns an image and then used it in headerBackImage. This way, it was no necessary to create a back button from scratch and deal with all the logic to go the previous screen.


App.js
```
options={{
            headerTitleAlign: 'left',
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerBackImage: () => <CustomHeaderBackImage />,
          }}

```

*** Search and menu functions on the way ***

<img width="571" alt="Screenshot 2020-08-18 at 16 03 58" src="https://user-images.githubusercontent.com/19783030/90529475-70082e00-e17c-11ea-8231-665d3c2d7263.png">
