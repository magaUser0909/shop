import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/showFullItem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'https://cdn.inmyroom.ru/uploads/photo/file/14/1430/1430d620-702f-40c3-8416-7838ece09607.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'https://loftmassiv.ru/image/cache/catalog/stoly/stol-loft-zhurnalny-libra4-1-650x650.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'https://links-stroy.ru/wp-content/uploads/2017/04/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD-4.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'https://likemall.ru/image/ae04.alicdn.com--kf--H17ea63f5b55145f1ab502e28300d8244p-jpeg.webp2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'https://static.baza.farpost.ru/v/1534305808028_bulletin',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    // При загрузке данных в массив "items", будем добавлять их в состояние "currentItems", 
    // для того, чтобы ими манипулировать.
    this.state.currentItems = this.state.items
    // Здесь, через метод "bind" наши функции получают доступ к состояниям конструктора.
    this.addToOrder = this.addToOrder.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.handleShowFullItem = this.handleShowFullItem.bind(this)
    this.handleCloseModalWindow = this.handleCloseModalWindow.bind(this)
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.handleDelete} />
        <Categories chooseCategory={this.chooseCategory} />
        {/* Отображаем лишь те элементы которые у нас есть в массиве "currentItems" */}
        <Items onShowFullItem={this.handleShowFullItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem
          item={this.state.fullItem}
          onShowFullItem={this.handleShowFullItem}
          onAdd={this.addToOrder}
          onCloseModalWindow={this.handleCloseModalWindow}
        />
        }
        <Footer />
      </div>
    )
  }

  handleCloseModalWindow() {
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  handleShowFullItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      // Написав return, мы выходим из функции, так как пустой return, который ничего не возвращает, возвращает false.
      return
    }

    // Значение массива "items" мы не меняем, в нем всегда будут храниться все элементы.
    // Когда мы фильтруем данные из массива "items", мы его не изменяем, мы говорим ему передать в массив "currentItems" лишь те элементы,
    // которые равны условию из метода "filter", но при этом массив "items" не меняется, мы просто как будто бы(образно говоря)
    // копируем из него данные равные нашему условию и меняем массив "currentItems" удаляя тем самым элементы, 
    // которые в нем находились до этого(т.е мы вносим изменения в массив "currentItems").
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  handleDelete(id) {
    this.setState({ orders: this.state.orders.filter(order => order.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
    console.log(!isInArray)
  }
}

export default App