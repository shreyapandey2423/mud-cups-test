import { MenuCategory } from '../types';

export const categories: MenuCategory[] = [
  {
    id: 'tea-tones',
    name: 'Tea Tones',
    items: [
      { id: 'tt1', name: 'Special Kulhad Chai', price: 25, description: 'Traditional Indian tea brewed with milk and aromatic spices, served in a rustic clay cup.', isVeg: true },
      { id: 'tt2', name: 'Ginger (Adrak) Chai', price: 30, description: 'Invigorating milk tea infused with freshly grated root ginger.', isVeg: true },
      { id: 'tt3', name: 'Cardamom (Elaichi) Chai', price: 30, description: 'Fragrant and calming tea brewed with freshly crushed cardamom pods.', isVeg: true },
      { id: 'tt4', name: 'Masala Chai', price: 35, description: 'Rich spiced tea brewed with ginger, cardamom, cloves, and cinnamon.', isVeg: true },
      { id: 'tt5', name: 'Kesar Chai (Special)', price: 45, description: 'Exquisite royal tea infused with pure saffron strands and mild spices.', isVeg: true },
      { id: 'tt6', name: 'Honey Lemon Green Tea', price: 40, description: 'Light, antioxidant-rich green tea sweetened with pure honey and freshly squeezed lemon.', isVeg: true },
      { id: 'tt7', name: 'Premium Black Tea', price: 25, description: 'Strong, robust brewed Assam black tea leaves served plain or with lemon.', isVeg: true }
    ]
  },
  {
    id: 'cravy-coffee',
    name: 'Cravy Coffee',
    items: [
      { id: 'cc1', name: 'Classic Espresso', price: 45, description: 'A bold, concentrated shot of premium Italian dark-roasted coffee beans.', isVeg: true },
      { id: 'cc2', name: 'Cappuccino', price: 75, description: 'Espresso topped with a deep, pillowy layer of steamed and frothed milk, finished with cocoa dust.', isVeg: true },
      { id: 'cc3', name: 'Café Latte', price: 80, description: 'Rich espresso balanced with steamed milk and a light, delicate layer of foam.', isVeg: true },
      { id: 'cc4', name: 'Café Mocha', price: 95, description: 'A decadent blend of espresso, hot chocolate, and silky steamed milk.', isVeg: true },
      { id: 'cc5', name: 'Hot Americano', price: 55, description: 'A rich espresso shot diluted with hot water for a smooth, bold black coffee experience.', isVeg: true },
      { id: 'cc6', name: 'Mud Cups Special Coffee', price: 90, description: 'Our signature rich, extra-frothy milk coffee brewed with a secret blend of spices.', isVeg: true },
      { id: 'cc7', name: 'Caramel Macchiato', price: 110, description: 'Freshly steamed milk stained with espresso and sweetened with luxurious caramel syrup.', isVeg: true }
    ]
  },
  {
    id: 'milky-way',
    name: 'Milky Way',
    items: [
      { id: 'mw1', name: 'Premium Hot Chocolate', price: 85, description: 'Creamy steamed milk melted with rich Dutch cocoa and premium dark chocolate blocks.', isVeg: true },
      { id: 'mw2', name: 'Kesar Pista Warm Milk', price: 70, description: 'Healthy warm milk enriched with real saffron strands and crushed pistachios.', isVeg: true },
      { id: 'mw3', name: 'Badam Almond Milk', price: 70, description: 'Traditional milk simmered with sweet almond paste, cardamoms, and saffron.', isVeg: true },
      { id: 'mw4', name: 'Turmeric Golden Milk', price: 60, description: 'An ancient immunity booster made with warm milk, organic turmeric, and black pepper.', isVeg: true },
      { id: 'mw5', name: 'Sweet Rose Milk', price: 65, description: 'Classic chilled milk flavored with pure fragrant rose petal syrup.', isVeg: true }
    ]
  },
  {
    id: 'cold-tik-tok',
    name: 'Cold Tik Tok',
    items: [
      { id: 'ct1', name: 'Blue Lagoon Mocktail', price: 80, description: 'A sparkling, refreshing blend of blue curacao, fresh lime, and fizzy club soda.', isVeg: true },
      { id: 'ct2', name: 'Classic Virgin Mojito', price: 90, description: 'Refreshing cooler with fresh muddled mint leaves, lime wedges, sugar, and club soda.', isVeg: true },
      { id: 'ct3', name: 'Mint Lemon Mojito', price: 90, description: 'An extra-minty version of our classic mojito, perfect for hot afternoons.', isVeg: true },
      { id: 'ct4', name: 'Strawberry Mojito', price: 95, description: 'Sweet and tangy mojito muddled with fresh strawberry reduction and crisp mint.', isVeg: true },
      { id: 'ct5', name: 'Green Apple Soda', price: 85, description: 'A tangy, crisp soda infused with green apple syrup and fresh lime juice.', isVeg: true },
      { id: 'ct6', name: 'Watermelon Cooldown', price: 95, description: 'A refreshing iced cooler made with real watermelon extract, mint, and soda.', isVeg: true }
    ]
  },
  {
    id: 'ice-age',
    name: 'Ice Age',
    items: [
      { id: 'ia1', name: 'Vanilla with Hot Fudge', price: 60, description: 'Two scoops of classic vanilla bean ice cream loaded with rich, warm chocolate fudge.', isVeg: true },
      { id: 'ia2', name: 'Butterscotch Crunch', price: 65, description: 'Creamy butterscotch ice cream with golden caramelized cashew nut crunchies.', isVeg: true },
      { id: 'ia3', name: 'Mud Cups Special Sundae', price: 120, description: 'An ultimate combination of chocolate and vanilla scoops, chocolate cake bits, nuts, and hot fudge.', isVeg: true },
      { id: 'ia4', name: 'Mango Kulfi Slice', price: 50, description: 'Traditional creamy dense mango kulfi served sliced with chopped pistachios.', isVeg: true },
      { id: 'ia5', name: 'Strawberry Dream Sundae', price: 110, description: 'Two scoops of strawberry ice cream layered with strawberry preserve, whipped cream, and wafer biscuit.', isVeg: true }
    ]
  },
  {
    id: 'milk-shakes',
    name: 'Milk Shakes',
    items: [
      { id: 'ms1', name: 'Oreo Mud Thick Shake', price: 110, description: 'Creamy, rich milkshake blended with double Oreo cookies, dark chocolate, and ice cream.', isVeg: true },
      { id: 'ms2', name: 'KitKat Break Shake', price: 120, description: 'Luscious chocolate shake blended with KitKat fingers, finished with whipped cream and KitKat chunks.', isVeg: true },
      { id: 'ms3', name: 'Classic Chocolate Shake', price: 95, description: 'A thick and silky shake made with rich Belgian chocolate ganache and chocolate ice cream.', isVeg: true },
      { id: 'ms4', name: 'Sweet Strawberry Shake', price: 90, description: 'Creamy thick shake blended with sweet strawberries and rich vanilla ice cream.', isVeg: true },
      { id: 'ms5', name: 'Royal Butterscotch Shake', price: 100, description: 'A rich buttery shake with butterscotch chunks and golden butterscotch syrup.', isVeg: true },
      { id: 'ms6', name: 'Alphonso Mango Shake', price: 95, description: 'Perfect summer shake blended with real sweet Alphonso mango pulp.', isVeg: true }
    ]
  },
  {
    id: 'quick-bites',
    name: 'Quick Bites',
    items: [
      { id: 'qb1', name: 'Classic Garlic Bread', price: 75, description: 'Four slices of freshly toasted French loaf rubbed with garlic butter and herbs.', isVeg: true },
      { id: 'qb2', name: 'Cheese Loaded Garlic Bread', price: 110, description: 'Toasted garlic bread loaded with a rich melt of premium mozzarella cheese.', isVeg: true },
      { id: 'qb3', name: 'Paneer Tikka Garlic Bread', price: 130, description: 'Garlic bread topped with spicy paneer tikka cubes, onions, green chillies, and melted cheese.', isVeg: true },
      { id: 'qb4', name: 'Crispy Potato Wedges', price: 80, description: 'Seasoned golden wedges of potato, crispy on the outside and fluffy inside, served with dip.', isVeg: true },
      { id: 'qb5', name: 'Golden Cheese Balls (6 pcs)', price: 95, description: 'Crispy fried breaded balls loaded with gooey melted cheese, corn, and green chillies.', isVeg: true }
    ]
  },
  {
    id: 'bun-blast',
    name: 'Bun Blast',
    items: [
      { id: 'bb1', name: 'Classic Bun Maska', price: 35, description: 'Warm, super-soft bun sliced and stuffed with a extremely generous slab of salted butter.', isVeg: true },
      { id: 'bb2', name: 'Sweet Bun Jam Maska', price: 40, description: 'Soft toasted bun spread with mixed fruit jam and a generous amount of salted butter.', isVeg: true },
      { id: 'bb3', name: 'Toasted Bun Cheese Maska', price: 50, description: 'Toasted sweet bun filled with creamy processed cheese spread and rich butter.', isVeg: true },
      { id: 'bb4', name: 'Toasted Bun Samosa', price: 45, description: 'A crispy, spiced potato samosa stuffed inside a butter-toasted bun with sweet & spicy chutneys.', isVeg: true },
      { id: 'bb5', name: 'Nutella Chocolate Bun Maska', price: 55, description: 'Soft warm bun spread with premium Nutella hazelnut spread and rich butter.', isVeg: true }
    ]
  },
  {
    id: 'sosi-sandwich',
    name: 'Sosi Sandwich',
    items: [
      { id: 'ss1', name: 'Veg Classic Grilled Sandwich', price: 80, description: 'Golden grilled sandwich filled with fresh cucumber, tomato, onion, and mint chutney.', isVeg: true },
      { id: 'ss2', name: 'Cheese Corn & Onion Sandwich', price: 95, description: 'Creamy grilled sandwich loaded with golden sweet corn, onions, and melted mozzarella cheese.', isVeg: true },
      { id: 'ss3', name: 'Paneer Tikka Grilled Sandwich', price: 120, description: 'Spicy grilled sandwich stuffed with tandoori paneer tikka, capsicum, and premium cheese.', isVeg: true },
      { id: 'ss4', name: 'Bombay Spicy Masala Sandwich', price: 85, description: 'Stuffed with spiced mashed potato bhaji, onions, tomatoes, and spicy sandwich masala.', isVeg: true },
      { id: 'ss5', name: 'Mud Cups Signature Club Sandwich', price: 140, description: 'An ultimate triple-layered sandwich packed with fresh veggies, mashed potatoes, double cheese, and paneer.', isVeg: true }
    ]
  },
  {
    id: 'fries-fashion',
    name: 'Fries Fashion',
    items: [
      { id: 'ff1', name: 'Classic Salted Fries', price: 70, description: 'Perfectly golden, crispy skin-on potato fries sprinkled with fine sea salt.', isVeg: true },
      { id: 'ff2', name: 'Spicy Masala Fries', price: 80, description: 'Crispy hot potato fries tossed in a spicy, tangy Indian chatpata spice seasoning.', isVeg: true },
      { id: 'ff3', name: 'Fire Peri Peri Fries', price: 90, description: 'Hot golden potato fries tossed in spicy African peri-peri chili dust.', isVeg: true },
      { id: 'ff4', name: 'Cheese Loaded Fashion Fries', price: 120, description: 'Crispy fries smothered in our rich, warm liquid cheddar cheese sauce and herbs.', isVeg: true },
      { id: 'ff5', name: 'Deep Baked Pizza Fries', price: 140, description: 'Crispy fries layered with tangy pizza sauce, sweet corn, capsicum, and a melted blanket of cheese.', isVeg: true }
    ]
  },
  {
    id: 'busy-burger',
    name: 'Busy Burger',
    items: [
      { id: 'bu1', name: 'Classic Aloo Tikki Burger', price: 60, description: 'Crispy golden potato patty topped with sweet onion slices, tomatoes, and creamy mayo in soft toasted buns.', isVeg: true },
      { id: 'bu2', name: 'Veg Double Cheese Burger', price: 80, description: 'Crispy mixed vegetable patty layered with double cheddar slices, lettuce, and secret burger sauce.', isVeg: true },
      { id: 'bu3', name: 'Spicy Paneer Tikka Burger', price: 110, description: 'A thick slice of golden-fried paneer in a spicy tandoori marinade, topped with tandoori mayo and onions.', isVeg: true },
      { id: 'bu4', name: 'Mud Cups Premium Giant Burger', price: 130, description: 'Double crispy patties loaded with cheese, grilled paneer, onions, tomatoes, lettuce, and sweet chili sauces.', isVeg: true },
      { id: 'bu5', name: 'Crispy Non-Veg Chicken Burger', price: 125, description: 'Golden crispy chicken breast patty layered with sliced cheese, fresh lettuce, onions, and spicy mayo.', isVeg: false }
    ]
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    items: [
      { id: 'nu1', name: 'Crispy Veg Nuggets (8 pcs)', price: 80, description: 'Golden fried bite-sized nuggets made of seasoned mashed vegetables, served with sweet-chili dip.', isVeg: true },
      { id: 'nu2', name: 'Cheese Corn Nuggets (8 pcs)', price: 95, description: 'Crispy nuggets with a gooey heart of melted cheese and sweet golden corn kernels.', isVeg: true },
      { id: 'nu3', name: 'Golden Chicken Nuggets (8 pcs)', price: 110, description: 'Crispy breaded bite-sized nuggets of tender, seasoned chicken breast, served with garlic dip.', isVeg: false },
      { id: 'nu4', name: 'High-Protein Soya Nuggets (8 pcs)', price: 85, description: 'Healthy and extremely crispy plant-based nuggets packed with spices and soya proteins.', isVeg: true }
    ]
  },
  {
    id: 'mazza-momos',
    name: 'Mazza Momos',
    items: [
      { id: 'mo1', name: 'Veg Steamed Momos (8 pcs)', price: 75, description: 'Delicate steamed flour dumplings packed with finely minced cabbage, carrots, and spring onions.', isVeg: true },
      { id: 'mo2', name: 'Veg Fried Crispy Momos (8 pcs)', price: 85, description: 'Our vegetable steamed momos deep fried to golden perfection, served with spicy red chili sauce.', isVeg: true },
      { id: 'mo3', name: 'Paneer Steamed Momos (8 pcs)', price: 95, description: 'Dumplings packed with fresh, soft grated paneer, light spices, and green herbs.', isVeg: true },
      { id: 'mo4', name: 'Paneer Fried Crispy Momos (8 pcs)', price: 105, description: 'Gooey, delicious paneer momos deep fried till golden, served with spicy red dip.', isVeg: true },
      { id: 'mo5', name: 'Veg Kurkure Crunchy Momos', price: 120, description: 'Crispy fried vegetable dumplings coated in a crunchy spiced cornflake batter.', isVeg: true },
      { id: 'mo6', name: 'Paneer Kurkure Crunchy Momos', price: 130, description: 'Crunchy cornflake-coated momos packed with spiced paneer stuffing, deep fried.', isVeg: true }
    ]
  },
  {
    id: 'pizza-paradise',
    name: 'Pizza Paradise',
    items: [
      { id: 'pi1', name: 'Classic Margherita Pizza', price: 130, description: 'Simple perfection with house-made tangy tomato sauce, loaded with mozzarella cheese and fresh basil.', isVeg: true },
      { id: 'pi2', name: 'Double Cheese Margherita Pizza', price: 160, description: 'Our classic Margherita topped with an extra thick double layer of premium gooey mozzarella cheese.', isVeg: true },
      { id: 'pi3', name: 'Veggie Paradise Special Pizza', price: 195, description: 'Stone-baked pizza topped with onions, crisp capsicum, ripe tomatoes, mushrooms, and sweet corn.', isVeg: true },
      { id: 'pi4', name: 'Spicy Paneer Tikka Pizza', price: 220, description: 'Indian fusion pizza topped with tandoori paneer tikka cubes, onions, green chillies, coriander, and cheese.', isVeg: true },
      { id: 'pi5', name: 'Golden Corn & Cheese Pizza', price: 175, description: 'Sweet golden corn kernels layered over a deeply cheesed pizza base.', isVeg: true },
      { id: 'pi6', name: 'Chicken Delight Pizza', price: 240, description: 'Loaded with smoky grilled chicken chunks, sliced onions, spicy green chilies, and melted cheese.', isVeg: false }
    ]
  },
  {
    id: 'rolls',
    name: 'Rolls',
    items: [
      { id: 'ro1', name: 'Classic Veg Roll', price: 70, description: 'Flaky flatbread wrapped with sautéed onions, capsicum, carrots, and sweet-sour sauces.', isVeg: true },
      { id: 'ro2', name: 'Paneer Kathi Roll', price: 100, description: 'Soft, flaky paratha wrapped with tandoori paneer cubes, crisp sliced onions, and green mint chutney.', isVeg: true },
      { id: 'ro3', name: 'Spicy Mayo Paneer Roll', price: 110, description: 'Rich paratha filled with crunchy paneer fingers, fresh cabbage slaw, and spicy mayonnaise.', isVeg: true },
      { id: 'ro4', name: 'Double Egg Roll', price: 80, description: 'Flatbread coated with double eggs, onions, green chillies, and chatpata spices.', isVeg: false },
      { id: 'ro5', name: 'Crispy Chicken Kathi Roll', price: 120, isVeg: false, description: 'Toasted flatbread filled with seasoned crispy chicken shreds, sliced onions, and sweet-sour dip.' }
    ]
  },
  {
    id: 'egg-panda',
    name: 'Egg Panda',
    items: [
      { id: 'ep1', name: 'Double Boiled Eggs (2 pcs)', price: 35, description: 'Freshly boiled farm-fresh eggs sliced and dusted with ground black pepper and black salt.', isVeg: false },
      { id: 'ep2', name: 'Egg Bhurji with Butter Buns (2 Buns)', price: 70, description: 'Scrambled eggs stir-fried with chopped onions, tomatoes, green chillies, and fresh coriander, served with buttered buns.', isVeg: false },
      { id: 'ep3', name: 'Classic Double Egg Omelette with Bread', price: 55, description: 'Fluffy pan-fried beaten eggs with onions and green chillies, served with 2 slices of buttered bread.', isVeg: false },
      { id: 'ep4', name: 'Loaded Cheese Omelette with Bread', price: 75, description: 'Our double egg omelette stuffed with a rich filling of melted processed cheese.', isVeg: false },
      { id: 'ep5', name: 'Crispy Double Bread Omelette', price: 60, description: 'Two slices of bread coated and toasted inside a massive, fluffy double egg omelette.', isVeg: false }
    ]
  },
  {
    id: 'mazza-maggie',
    name: 'Mazza Maggie',
    items: [
      { id: 'mm1', name: 'Plain Classic Maggi', price: 45, description: 'Comforting bowl of classic Maggi instant noodles cooked with the original tastemaker spice.', isVeg: true },
      { id: 'mm2', name: 'Healthy Vegetable Maggi', price: 60, description: 'Maggi noodles tossed with fresh green peas, finely chopped carrots, sweet corn, and onions.', isVeg: true },
      { id: 'mm3', name: 'Cheese Loaded Maggi', price: 75, description: 'Hot vegetable Maggi topped with a generous melting pile of grated mozzarella cheese.', isVeg: true },
      { id: 'mm4', name: 'Spicy Paneer Tikka Maggi', price: 85, description: 'Maggi noodles tossed with golden sautéed paneer cubes and special tandoori masala.', isVeg: true },
      { id: 'mm5', name: 'Double Egg Masala Maggi', price: 75, description: 'Rich Maggi noodles cooked with scrambled eggs and extra hot Maggi spice mix.', isVeg: false }
    ]
  },
  {
    id: 'pasta-porsh',
    name: 'Pasta Porsh',
    items: [
      { id: 'pa1', name: 'Red Sauce Penne (Arrabbiata)', price: 110, description: 'Penne pasta tossed in a fiery, tangy Italian tomato sauce with garlic, red chili flakes, and black olives.', isVeg: true },
      { id: 'pa2', name: 'White Sauce Penne (Alfredo)', price: 130, description: 'Creamy, rich penne pasta tossed in a luxurious butter, cream, and parmesan cheese sauce with sweet corn.', isVeg: true },
      { id: 'pa3', name: 'Pink Sauce Penne (Mix Sauce)', price: 140, description: 'The best of both worlds—penne tossed in a blend of tangy red tomato sauce and rich white cream sauce.', isVeg: true },
      { id: 'pa4', name: 'Cheese Loaded Baked Macaroni', price: 120, description: 'Elbow macaroni tossed in a creamy cheddar cheese sauce and baked with a golden cheese crust.', isVeg: true }
    ]
  }
];
