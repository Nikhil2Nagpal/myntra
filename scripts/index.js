let bagItems = [];

onLoad();

function onLoad() {
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  bagItemCount();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  bagItemCount();
}

function bagItemCount() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visiblity = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visiblity = 'hidden';
    }
    
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
  <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% Off)</span>
    </div>
    <button class="bag-button" onclick="addToBag(${item.id})">Add To Bag</button>
  </div>`
    })
    
  itemsContainerElement.innerHTML = innerHtml;
}

