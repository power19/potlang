// === PrepSmart: Healthy Food Prep & Calorie Tracker ===

const DAILY_GOAL = 1500;
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack'];

// === RECIPE DATABASE ===
const RECIPES = [
  {
    id: 1,
    name: 'Greek Yogurt Power Bowl',
    emoji: '\u{1F963}',
    meal: 'breakfast',
    proteinType: 'vegetarian',
    calories: 320,
    protein: 24,
    carbs: 38,
    fat: 8,
    prepTime: '5 min',
    description: 'Creamy Greek yogurt with fresh berries, honey, and crunchy granola.',
    ingredients: [
      '200g plain Greek yogurt',
      '1/2 cup mixed berries (blueberries, strawberries)',
      '2 tbsp granola',
      '1 tsp honey',
      '1 tbsp chia seeds'
    ],
    instructions: [
      'Scoop yogurt into a bowl.',
      'Top with mixed berries and granola.',
      'Drizzle with honey and sprinkle chia seeds.',
      'Serve immediately or refrigerate for later.'
    ]
  },
  {
    id: 2,
    name: 'Veggie Egg Scramble',
    emoji: '\u{1F373}',
    meal: 'breakfast',
    proteinType: 'eggs',
    calories: 280,
    protein: 20,
    carbs: 12,
    fat: 16,
    prepTime: '10 min',
    description: 'Fluffy scrambled eggs loaded with colorful bell peppers, spinach, and tomatoes.',
    ingredients: [
      '3 large eggs',
      '1/2 cup diced bell peppers',
      '1 cup fresh spinach',
      '1/4 cup diced tomatoes',
      '1 tsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a non-stick pan over medium heat.',
      'Saut\u00e9 bell peppers for 2 minutes until softened.',
      'Add spinach and tomatoes, cook 1 minute.',
      'Pour in beaten eggs and gently scramble until set.',
      'Season with salt and pepper. Serve warm.'
    ]
  },
  {
    id: 3,
    name: 'Overnight Oats',
    emoji: '\u{1F95B}',
    meal: 'breakfast',
    proteinType: 'vegetarian',
    calories: 340,
    protein: 14,
    carbs: 52,
    fat: 9,
    prepTime: '5 min + overnight',
    description: 'No-cook oats soaked overnight in almond milk with banana and peanut butter.',
    ingredients: [
      '1/2 cup rolled oats',
      '1/2 cup almond milk',
      '1/4 cup Greek yogurt',
      '1 tbsp peanut butter',
      '1/2 banana, sliced',
      '1 tsp honey'
    ],
    instructions: [
      'Combine oats, almond milk, and yogurt in a jar.',
      'Stir in peanut butter and honey.',
      'Top with banana slices.',
      'Cover and refrigerate overnight (at least 6 hours).',
      'Enjoy cold or warm up in the microwave.'
    ]
  },
  {
    id: 4,
    name: 'Grilled Chicken Salad',
    emoji: '\u{1F957}',
    meal: 'lunch',
    proteinType: 'chicken',
    calories: 380,
    protein: 36,
    carbs: 18,
    fat: 18,
    prepTime: '20 min',
    description: 'Juicy grilled chicken breast over crisp mixed greens with a light vinaigrette.',
    ingredients: [
      '150g chicken breast',
      '3 cups mixed greens',
      '1/2 avocado, sliced',
      '1/4 cup cherry tomatoes',
      '1/4 cucumber, sliced',
      '2 tbsp balsamic vinaigrette'
    ],
    instructions: [
      'Season chicken with salt, pepper, and a pinch of garlic powder.',
      'Grill on medium-high for 6-7 min per side until cooked through.',
      'Let rest 5 minutes, then slice.',
      'Arrange mixed greens on a plate.',
      'Top with chicken, avocado, tomatoes, and cucumber.',
      'Drizzle with vinaigrette and serve.'
    ]
  },
  {
    id: 5,
    name: 'Turkey & Veggie Wrap',
    emoji: '\u{1F32F}',
    meal: 'lunch',
    proteinType: 'turkey',
    calories: 350,
    protein: 28,
    carbs: 34,
    fat: 12,
    prepTime: '10 min',
    description: 'Lean turkey with hummus, fresh veggies, and feta in a whole wheat wrap.',
    ingredients: [
      '1 whole wheat tortilla',
      '100g sliced turkey breast',
      '2 tbsp hummus',
      '1/4 cup shredded carrots',
      '1/4 cup cucumber slices',
      '2 tbsp crumbled feta',
      'Handful of baby spinach'
    ],
    instructions: [
      'Spread hummus evenly over the tortilla.',
      'Layer turkey slices down the center.',
      'Add carrots, cucumber, feta, and spinach.',
      'Fold in the sides and roll tightly.',
      'Slice in half diagonally and serve.'
    ]
  },
  {
    id: 6,
    name: 'Quinoa Buddha Bowl',
    emoji: '\u{1F35B}',
    meal: 'lunch',
    proteinType: 'vegetarian',
    calories: 420,
    protein: 18,
    carbs: 52,
    fat: 16,
    prepTime: '25 min',
    description: 'Nourishing bowl with quinoa, roasted sweet potato, chickpeas, and tahini.',
    ingredients: [
      '1/2 cup cooked quinoa',
      '1/2 sweet potato, cubed and roasted',
      '1/3 cup chickpeas',
      '1 cup kale, massaged',
      '1/4 avocado',
      '1 tbsp tahini',
      'Lemon juice, salt, pepper'
    ],
    instructions: [
      'Roast cubed sweet potato at 400\u00b0F for 20 min.',
      'Cook quinoa according to package directions.',
      'Massage kale with a drizzle of olive oil and lemon.',
      'Assemble bowl: quinoa base, sweet potato, chickpeas, kale.',
      'Top with avocado slices.',
      'Drizzle with tahini and a squeeze of lemon.'
    ]
  },
  {
    id: 7,
    name: 'Roasted Chicken & Vegetables',
    emoji: '\u{1F357}',
    meal: 'dinner',
    proteinType: 'chicken',
    calories: 410,
    protein: 38,
    carbs: 20,
    fat: 18,
    prepTime: '30 min',
    description: 'Juicy roasted chicken thighs with seasonal roasted vegetables and herbs.',
    ingredients: [
      '200g bone-in chicken thigh, skinless',
      '1 cup broccoli florets',
      '1/2 cup diced carrots',
      '1/2 cup diced zucchini',
      '1 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 tsp dried rosemary',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 425\u00b0F (220\u00b0C).',
      'Toss vegetables with olive oil, garlic, rosemary, salt, and pepper.',
      'Season chicken thigh and place on a lined baking sheet with vegetables.',
      'Roast for 25-30 minutes until chicken reaches 165\u00b0F (74\u00b0C).',
      'Let rest 5 minutes before serving.',
      'Plate chicken with roasted vegetables and enjoy.'
    ]
  },
  {
    id: 8,
    name: 'Chicken Stir-Fry',
    emoji: '\u{1F372}',
    meal: 'dinner',
    proteinType: 'chicken',
    calories: 380,
    protein: 32,
    carbs: 30,
    fat: 14,
    prepTime: '20 min',
    description: 'Quick and colorful chicken stir-fry with broccoli, snap peas, and ginger soy sauce.',
    ingredients: [
      '150g chicken breast, sliced thin',
      '1 cup broccoli florets',
      '1/2 cup snap peas',
      '1/2 red bell pepper, sliced',
      '2 tbsp low-sodium soy sauce',
      '1 tsp sesame oil',
      '1 tsp fresh ginger, grated',
      '1/2 cup brown rice, cooked'
    ],
    instructions: [
      'Cook brown rice according to package directions.',
      'Heat sesame oil in a wok or large pan over high heat.',
      'Stir-fry chicken 4-5 min until cooked through. Set aside.',
      'Add broccoli, snap peas, and bell pepper. Stir-fry 3 min.',
      'Return chicken, add soy sauce and ginger. Toss well.',
      'Serve over brown rice.'
    ]
  },
  {
    id: 9,
    name: 'Lean Beef Tacos',
    emoji: '\u{1F32E}',
    meal: 'dinner',
    proteinType: 'beef',
    calories: 420,
    protein: 30,
    carbs: 36,
    fat: 16,
    prepTime: '15 min',
    description: 'Seasoned lean ground beef in corn tortillas with fresh pico de gallo.',
    ingredients: [
      '120g lean ground beef (95%)',
      '3 small corn tortillas',
      '1/4 cup diced tomatoes',
      '2 tbsp diced onion',
      'Fresh cilantro',
      '1/2 lime',
      '1 tsp cumin',
      '1/2 tsp chili powder',
      'Shredded lettuce'
    ],
    instructions: [
      'Brown ground beef in a pan, breaking it apart.',
      'Season with cumin, chili powder, salt, and pepper.',
      'Warm corn tortillas in a dry pan or microwave.',
      'Mix tomatoes, onion, cilantro, and lime for pico.',
      'Fill tortillas with beef, lettuce, and pico de gallo.',
      'Squeeze extra lime on top and enjoy.'
    ]
  },
  {
    id: 10,
    name: 'Lentil & Vegetable Soup',
    emoji: '\u{1F35C}',
    meal: 'dinner',
    proteinType: 'vegetarian',
    calories: 310,
    protein: 20,
    carbs: 45,
    fat: 6,
    prepTime: '35 min',
    description: 'Hearty, fiber-rich red lentil soup with carrots, celery, and warming spices.',
    ingredients: [
      '1/2 cup red lentils',
      '1 carrot, diced',
      '1 celery stalk, diced',
      '1/2 onion, diced',
      '2 cloves garlic',
      '1 tsp cumin',
      '1/2 tsp turmeric',
      '3 cups vegetable broth',
      '1 tbsp olive oil'
    ],
    instructions: [
      'Heat olive oil in a pot. Saut\u00e9 onion, carrot, and celery 5 min.',
      'Add garlic, cumin, and turmeric. Cook 1 min.',
      'Add rinsed lentils and vegetable broth.',
      'Bring to a boil, then reduce heat and simmer 25 min.',
      'Season with salt and pepper.',
      'Serve with a squeeze of lemon if desired.'
    ]
  },
  {
    id: 11,
    name: 'Apple & Almond Butter',
    emoji: '\u{1F34E}',
    meal: 'snack',
    proteinType: 'vegetarian',
    calories: 190,
    protein: 5,
    carbs: 26,
    fat: 9,
    prepTime: '2 min',
    description: 'Crisp apple slices paired with creamy almond butter for a satisfying snack.',
    ingredients: [
      '1 medium apple',
      '1.5 tbsp almond butter'
    ],
    instructions: [
      'Wash and slice the apple.',
      'Serve with almond butter for dipping.'
    ]
  },
  {
    id: 12,
    name: 'Hummus & Veggie Sticks',
    emoji: '\u{1F955}',
    meal: 'snack',
    proteinType: 'vegetarian',
    calories: 160,
    protein: 6,
    carbs: 20,
    fat: 7,
    prepTime: '5 min',
    description: 'Crunchy carrot, celery, and cucumber sticks with creamy hummus.',
    ingredients: [
      '1/3 cup hummus',
      '1 carrot, cut into sticks',
      '2 celery stalks',
      '1/4 cucumber, cut into sticks'
    ],
    instructions: [
      'Cut vegetables into sticks.',
      'Portion hummus into a small bowl.',
      'Dip and enjoy!'
    ]
  },
  {
    id: 13,
    name: 'Protein Energy Balls',
    emoji: '\u{1F36A}',
    meal: 'snack',
    proteinType: 'vegetarian',
    calories: 140,
    protein: 8,
    carbs: 16,
    fat: 6,
    prepTime: '15 min',
    description: 'No-bake energy balls with oats, protein powder, and dark chocolate chips.',
    ingredients: [
      '1/2 cup rolled oats',
      '1 scoop vanilla protein powder',
      '2 tbsp peanut butter',
      '2 tbsp honey',
      '1 tbsp dark chocolate chips'
    ],
    instructions: [
      'Combine oats, protein powder in a bowl.',
      'Mix in peanut butter and honey until a dough forms.',
      'Fold in chocolate chips.',
      'Roll into small balls (makes ~6).',
      'Refrigerate for 30 min before serving. Calories per ball listed.'
    ]
  },
  {
    id: 14,
    name: 'Mediterranean Chicken Bowl',
    emoji: '\u{1F96A}',
    meal: 'lunch',
    proteinType: 'chicken',
    calories: 440,
    protein: 35,
    carbs: 40,
    fat: 16,
    prepTime: '25 min',
    description: 'Grilled chicken with brown rice, cucumber, tomato, olives, and tzatziki.',
    ingredients: [
      '150g chicken breast',
      '1/2 cup brown rice, cooked',
      '1/4 cup cucumber, diced',
      '1/4 cup cherry tomatoes, halved',
      '2 tbsp kalamata olives',
      '2 tbsp tzatziki sauce',
      '1 tbsp red onion, diced',
      'Fresh parsley'
    ],
    instructions: [
      'Season and grill chicken breast. Let rest, then dice.',
      'Prepare brown rice.',
      'In a bowl, layer rice, chicken, cucumber, tomatoes, olives, and onion.',
      'Top with tzatziki and fresh parsley.',
      'Serve warm or cold.'
    ]
  },
  {
    id: 15,
    name: 'Turkey Stuffed Peppers',
    emoji: '\u{1FAD1}',
    meal: 'dinner',
    proteinType: 'turkey',
    calories: 300,
    protein: 28,
    carbs: 22,
    fat: 12,
    prepTime: '35 min',
    description: 'Colorful bell peppers stuffed with seasoned ground turkey, rice, and melted cheese.',
    ingredients: [
      '2 large bell peppers, halved and seeded',
      '120g lean ground turkey',
      '1/4 cup cooked brown rice',
      '1/4 cup diced tomatoes',
      '1/4 cup shredded mozzarella',
      '1 tsp cumin',
      '1/2 tsp paprika',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 375\u00b0F (190\u00b0C).',
      'Brown ground turkey with cumin, paprika, salt, and pepper.',
      'Mix turkey with cooked rice and diced tomatoes.',
      'Fill pepper halves with the turkey mixture.',
      'Top with shredded mozzarella.',
      'Bake for 25 minutes until peppers are tender and cheese is bubbly.'
    ]
  },
  {
    id: 16,
    name: 'Berry Smoothie',
    emoji: '\u{1F964}',
    meal: 'breakfast',
    proteinType: 'vegetarian',
    calories: 260,
    protein: 20,
    carbs: 36,
    fat: 4,
    prepTime: '5 min',
    description: 'A thick, refreshing smoothie with mixed berries, banana, and protein powder.',
    ingredients: [
      '1/2 cup frozen mixed berries',
      '1/2 banana',
      '1 scoop vanilla protein powder',
      '1 cup unsweetened almond milk',
      '1/2 cup ice'
    ],
    instructions: [
      'Add almond milk and protein powder to blender.',
      'Add berries, banana, and ice.',
      'Blend until smooth and creamy.',
      'Pour into a glass and enjoy immediately.'
    ]
  },
  {
    id: 17,
    name: 'Baked Salmon & Asparagus',
    emoji: '\u{1F41F}',
    meal: 'dinner',
    proteinType: 'fish',
    calories: 400,
    protein: 38,
    carbs: 14,
    fat: 22,
    prepTime: '25 min',
    description: 'Herb-crusted salmon fillet baked alongside tender asparagus spears.',
    ingredients: [
      '150g salmon fillet',
      '1 bunch asparagus, trimmed',
      '1 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 lemon',
      'Fresh dill',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 400\u00b0F (200\u00b0C).',
      'Place salmon and asparagus on a lined baking sheet.',
      'Drizzle with olive oil, sprinkle garlic, salt, and pepper.',
      'Add lemon slices on top of salmon.',
      'Bake for 15-18 minutes until salmon flakes easily.',
      'Garnish with fresh dill and serve.'
    ]
  },
  {
    id: 18,
    name: 'Shrimp & Zucchini Noodles',
    emoji: '\u{1F364}',
    meal: 'dinner',
    proteinType: 'fish',
    calories: 290,
    protein: 30,
    carbs: 14,
    fat: 13,
    prepTime: '15 min',
    description: 'Light and fresh zucchini noodles tossed with garlic shrimp and cherry tomatoes.',
    ingredients: [
      '150g shrimp, peeled',
      '2 medium zucchini, spiralized',
      '1/2 cup cherry tomatoes, halved',
      '2 cloves garlic, minced',
      '1 tbsp olive oil',
      'Red pepper flakes',
      'Fresh basil',
      'Lemon juice'
    ],
    instructions: [
      'Heat olive oil in a pan over medium-high heat.',
      'Cook shrimp with garlic 2-3 min per side.',
      'Add zucchini noodles and tomatoes. Toss 2 min.',
      'Season with salt, pepper, and red pepper flakes.',
      'Squeeze lemon over top and garnish with basil.'
    ]
  }
];

// === STATE ===
let state = {
  todayLog: [],
  logHistory: {},
  mealPlan: {},
  currentLogDate: getTodayKey()
};

// === HELPERS ===
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
}

function saveState() {
  state.logHistory[getTodayKey()] = state.todayLog;
  localStorage.setItem('prepsmart', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('prepsmart');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
    const today = getTodayKey();
    if (state.logHistory[today]) {
      state.todayLog = state.logHistory[today];
    } else {
      state.todayLog = [];
    }
    state.currentLogDate = today;
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// === CALORIE RING ===
function updateCalorieRing() {
  const consumed = state.todayLog.reduce((sum, item) => sum + item.calories, 0);
  const protein = state.todayLog.reduce((sum, item) => sum + (item.protein || 0), 0);
  const carbs = state.todayLog.reduce((sum, item) => sum + (item.carbs || 0), 0);
  const fat = state.todayLog.reduce((sum, item) => sum + (item.fat || 0), 0);
  const remaining = Math.max(0, DAILY_GOAL - consumed);
  const fraction = Math.min(consumed / DAILY_GOAL, 1);
  const circumference = 2 * Math.PI * 85;
  const offset = circumference * (1 - fraction);

  const ring = document.querySelector('.ring-fill');
  ring.style.strokeDashoffset = offset;
  ring.classList.remove('warning', 'over');
  if (consumed > DAILY_GOAL) {
    ring.classList.add('over');
  } else if (consumed > DAILY_GOAL * 0.85) {
    ring.classList.add('warning');
  }

  document.getElementById('caloriesConsumed').textContent = consumed;
  document.getElementById('calorieGoal').textContent = DAILY_GOAL;
  document.getElementById('caloriesRemaining').textContent = remaining;
  document.getElementById('mealsLogged').textContent = state.todayLog.length;
  document.getElementById('proteinTotal').textContent = protein + 'g';
  document.getElementById('carbsTotal').textContent = carbs + 'g';
  document.getElementById('fatTotal').textContent = fat + 'g';
}

// === TODAY LOG ===
function renderTodayLog() {
  const container = document.getElementById('todayLogList');
  if (state.todayLog.length === 0) {
    container.innerHTML = '<p class="empty-state">No meals logged yet today. Start by adding food above or picking a recipe!</p>';
    return;
  }

  container.innerHTML = state.todayLog.map(item => `
    <div class="log-item ${item.mealType}">
      <div class="log-item-info">
        <span class="log-item-name">${escapeHtml(item.name)}</span>
        <span class="log-item-meta">${capitalize(item.mealType)} &bull; P: ${item.protein || 0}g &bull; C: ${item.carbs || 0}g &bull; F: ${item.fat || 0}g</span>
      </div>
      <div class="log-item-right">
        <span class="log-item-cal">${item.calories} kcal</span>
        <button class="remove-btn" data-id="${item.id}" title="Remove">&times;</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.todayLog = state.todayLog.filter(i => i.id !== btn.dataset.id);
      saveState();
      renderTodayLog();
      updateCalorieRing();
    });
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// === QUICK ADD ===
function setupQuickAdd() {
  document.getElementById('quickAddForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = {
      id: generateId(),
      name: document.getElementById('quickFoodName').value.trim(),
      calories: parseInt(document.getElementById('quickCalories').value) || 0,
      protein: parseInt(document.getElementById('quickProtein').value) || 0,
      carbs: parseInt(document.getElementById('quickCarbs').value) || 0,
      fat: parseInt(document.getElementById('quickFat').value) || 0,
      mealType: document.getElementById('quickMealType').value,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    state.todayLog.push(entry);
    saveState();
    renderTodayLog();
    updateCalorieRing();
    e.target.reset();
  });
}

// === LOG FROM RECIPE ===
function logRecipe(recipe, mealType) {
  const entry = {
    id: generateId(),
    name: recipe.name,
    calories: recipe.calories,
    protein: recipe.protein,
    carbs: recipe.carbs,
    fat: recipe.fat,
    mealType: mealType || recipe.meal,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  state.todayLog.push(entry);
  saveState();
  renderTodayLog();
  updateCalorieRing();
}

// === RECIPES ===
function renderRecipes(filter) {
  const grid = document.getElementById('recipeGrid');
  const filtered = filter === 'all' ? RECIPES : RECIPES.filter(r => r.meal === filter);

  grid.innerHTML = filtered.map(r => `
    <div class="recipe-card" data-recipe-id="${r.id}">
      <div class="recipe-card-img">${r.emoji}</div>
      <div class="recipe-card-body">
        <div class="recipe-card-title">${escapeHtml(r.name)}</div>
        <div class="recipe-card-desc">${escapeHtml(r.description)}</div>
        <div class="recipe-card-macros">
          <span class="macro-badge macro-cal">${r.calories} kcal</span>
          <span class="macro-badge macro-protein">P: ${r.protein}g</span>
          <span class="macro-badge macro-carbs">C: ${r.carbs}g</span>
          <span class="macro-badge macro-fat">F: ${r.fat}g</span>
        </div>
      </div>
      <div class="recipe-card-footer">
        <span class="recipe-meal-type">${r.meal} &bull; ${r.prepTime}</span>
        <button class="recipe-add-btn" data-recipe-id="${r.id}">+ Log</button>
      </div>
    </div>
  `).join('');

  // Card click -> open modal
  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('recipe-add-btn')) return;
      const recipe = RECIPES.find(r => r.id === parseInt(card.dataset.recipeId));
      if (recipe) openRecipeModal(recipe);
    });
  });

  // Quick log button
  grid.querySelectorAll('.recipe-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const recipe = RECIPES.find(r => r.id === parseInt(btn.dataset.recipeId));
      if (recipe) {
        logRecipe(recipe);
        btn.textContent = 'Logged!';
        setTimeout(() => { btn.textContent = '+ Log'; }, 1200);
      }
    });
  });
}

function openRecipeModal(recipe) {
  const modal = document.getElementById('recipeModal');
  const detail = document.getElementById('recipeDetail');

  detail.innerHTML = `
    <div class="modal-recipe-emoji">${recipe.emoji}</div>
    <div class="modal-recipe-title">${escapeHtml(recipe.name)}</div>
    <p style="color:var(--gray-500);margin-bottom:1rem;">${escapeHtml(recipe.description)}</p>
    <div class="modal-macros">
      <span class="macro-badge macro-cal">${recipe.calories} kcal</span>
      <span class="macro-badge macro-protein">Protein: ${recipe.protein}g</span>
      <span class="macro-badge macro-carbs">Carbs: ${recipe.carbs}g</span>
      <span class="macro-badge macro-fat">Fat: ${recipe.fat}g</span>
    </div>
    <p style="font-size:0.85rem;color:var(--gray-500);margin-bottom:1rem;">Prep: ${recipe.prepTime} &bull; ${capitalize(recipe.meal)}</p>
    <div class="modal-section">
      <h4>Ingredients</h4>
      <ul>${recipe.ingredients.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>Instructions</h4>
      <ol>${recipe.instructions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    </div>
    <button class="btn btn-primary modal-add-btn" id="modalLogBtn">+ Log This Meal (${recipe.calories} kcal)</button>
  `;

  modal.classList.remove('hidden');

  document.getElementById('modalLogBtn').addEventListener('click', () => {
    logRecipe(recipe);
    modal.classList.add('hidden');
  });
}

function setupRecipeFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipes(btn.dataset.filter);
    });
  });
}

function setupRecipeModal() {
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('recipeModal').classList.add('hidden');
  });
  document.getElementById('recipeModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('recipeModal')) {
      document.getElementById('recipeModal').classList.add('hidden');
    }
  });
}

// === MEAL PLAN ===
function renderMealPlan() {
  const grid = document.getElementById('mealplanGrid');
  grid.innerHTML = DAYS.map(day => {
    const dayMeals = state.mealPlan[day] || {};
    const dayCal = MEAL_TYPES.reduce((sum, mt) => {
      const r = dayMeals[mt] ? RECIPES.find(rec => rec.id === dayMeals[mt]) : null;
      return sum + (r ? r.calories : 0);
    }, 0);

    const slots = MEAL_TYPES.map(mt => {
      const recipe = dayMeals[mt] ? RECIPES.find(r => r.id === dayMeals[mt]) : null;
      if (recipe) {
        return `<div class="mealplan-meal-slot filled" data-day="${day}" data-meal="${mt}">
          <span>${recipe.emoji} ${escapeHtml(recipe.name)} <small>(${recipe.calories})</small></span>
          <button class="slot-remove" data-day="${day}" data-meal="${mt}">&times;</button>
        </div>`;
      }
      return `<div class="mealplan-meal-slot" data-day="${day}" data-meal="${mt}">
        <span class="slot-label">+ ${capitalize(mt)}</span>
      </div>`;
    }).join('');

    return `<div class="mealplan-day">
      <div class="mealplan-day-header">${day.slice(0, 3)}<span class="mealplan-day-cal">${dayCal} / ${DAILY_GOAL} kcal</span></div>
      ${slots}
    </div>`;
  }).join('');

  // Click empty slots to show assignment
  grid.querySelectorAll('.mealplan-meal-slot:not(.filled)').forEach(slot => {
    slot.addEventListener('click', () => {
      const day = slot.dataset.day;
      const meal = slot.dataset.meal;
      selectingSlot = { day, meal };
      highlightSidebarForMeal(meal);
    });
  });

  // Remove buttons
  grid.querySelectorAll('.slot-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const day = btn.dataset.day;
      const meal = btn.dataset.meal;
      if (!state.mealPlan[day]) return;
      delete state.mealPlan[day][meal];
      saveState();
      renderMealPlan();
      renderWeeklySummary();
    });
  });

  renderWeeklySummary();
}

let selectingSlot = null;
let activeProteinFilter = 'all';

function highlightSidebarForMeal(meal) {
  const items = document.querySelectorAll('.mealplan-recipe-item');
  items.forEach(item => {
    item.style.border = '';
  });
}

function renderMealPlanSidebar(filter) {
  const list = document.getElementById('mealplanRecipeList');
  const q = (filter || '').toLowerCase();
  let filtered = RECIPES;
  if (q) filtered = filtered.filter(r => r.name.toLowerCase().includes(q));
  if (activeProteinFilter !== 'all') filtered = filtered.filter(r => r.proteinType === activeProteinFilter);

  list.innerHTML = filtered.map(r => `
    <div class="mealplan-recipe-item" data-recipe-id="${r.id}">
      <span>${r.emoji} ${escapeHtml(r.name)}</span>
      <span class="recipe-cal">${r.calories} kcal</span>
    </div>
  `).join('');

  list.querySelectorAll('.mealplan-recipe-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!selectingSlot) {
        alert('Click a meal slot on the calendar first, then select a recipe.');
        return;
      }
      const recipeId = parseInt(item.dataset.recipeId);
      const { day, meal } = selectingSlot;
      if (!state.mealPlan[day]) state.mealPlan[day] = {};
      state.mealPlan[day][meal] = recipeId;
      selectingSlot = null;
      saveState();
      renderMealPlan();
    });
  });
}

function setupMealPlanSearch() {
  document.getElementById('mealplanSearch').addEventListener('input', (e) => {
    renderMealPlanSidebar(e.target.value);
  });
}

function setupProteinFilters() {
  document.querySelectorAll('.protein-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.protein-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProteinFilter = btn.dataset.protein;
      renderMealPlanSidebar(document.getElementById('mealplanSearch').value);
    });
  });
}

function renderWeeklySummary() {
  const container = document.getElementById('weeklySummary');
  container.innerHTML = DAYS.map(day => {
    const dayMeals = state.mealPlan[day] || {};
    const total = MEAL_TYPES.reduce((sum, mt) => {
      const r = dayMeals[mt] ? RECIPES.find(rec => rec.id === dayMeals[mt]) : null;
      return sum + (r ? r.calories : 0);
    }, 0);
    const over = total > DAILY_GOAL;
    const filledSlots = MEAL_TYPES.filter(mt => dayMeals[mt]).length;

    return `<div class="summary-day">
      <div class="summary-day-name">${day.slice(0, 3)}</div>
      <div class="summary-day-cal ${over ? 'over' : ''}">${total}</div>
      <div class="summary-day-status">${filledSlots}/4 meals</div>
    </div>`;
  }).join('');
}

// === FOOD LOG HISTORY ===
function renderLogHistory() {
  const dateStr = state.currentLogDate;
  document.getElementById('logDate').textContent = formatDate(dateStr);

  const container = document.getElementById('logHistory');
  const entries = state.logHistory[dateStr] || [];

  if (entries.length === 0) {
    container.innerHTML = '<p class="empty-state">No entries for this day.</p>';
    return;
  }

  const totalCal = entries.reduce((s, e) => s + e.calories, 0);
  const totalP = entries.reduce((s, e) => s + (e.protein || 0), 0);
  const totalC = entries.reduce((s, e) => s + (e.carbs || 0), 0);
  const totalF = entries.reduce((s, e) => s + (e.fat || 0), 0);

  const groupedByMeal = {};
  entries.forEach(e => {
    if (!groupedByMeal[e.mealType]) groupedByMeal[e.mealType] = [];
    groupedByMeal[e.mealType].push(e);
  });

  let html = `<div style="margin-bottom:1rem;font-size:0.9rem;color:var(--gray-600);">
    Total: <strong>${totalCal} kcal</strong> &bull; P: ${totalP}g &bull; C: ${totalC}g &bull; F: ${totalF}g
    ${totalCal > DAILY_GOAL ? '<span style="color:var(--red-500);font-weight:600;"> (Over budget!)</span>' : ''}
  </div>`;

  for (const [meal, items] of Object.entries(groupedByMeal)) {
    html += `<div class="log-day-group"><h3>${capitalize(meal)}</h3>`;
    html += items.map(item => `
      <div class="log-item ${item.mealType}">
        <div class="log-item-info">
          <span class="log-item-name">${escapeHtml(item.name)}</span>
          <span class="log-item-meta">P: ${item.protein || 0}g &bull; C: ${item.carbs || 0}g &bull; F: ${item.fat || 0}g</span>
        </div>
        <div class="log-item-right">
          <span class="log-item-cal">${item.calories} kcal</span>
        </div>
      </div>
    `).join('');
    html += '</div>';
  }

  container.innerHTML = html;
}

function setupLogNavigation() {
  document.getElementById('prevDay').addEventListener('click', () => {
    const d = new Date(state.currentLogDate + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    state.currentLogDate = d.toISOString().slice(0, 10);
    renderLogHistory();
  });

  document.getElementById('nextDay').addEventListener('click', () => {
    const d = new Date(state.currentLogDate + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    const today = getTodayKey();
    const newDate = d.toISOString().slice(0, 10);
    if (newDate <= today) {
      state.currentLogDate = newDate;
      renderLogHistory();
    }
  });
}

// === TAB NAVIGATION ===
function setupTabs() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById(btn.dataset.tab);
      if (tab) tab.classList.add('active');

      if (btn.dataset.tab === 'mealplan') {
        renderMealPlan();
        renderMealPlanSidebar();
      }
      if (btn.dataset.tab === 'log') {
        state.currentLogDate = getTodayKey();
        renderLogHistory();
      }
    });
  });
}

// === INIT ===
function init() {
  loadState();
  setupTabs();
  setupQuickAdd();
  setupRecipeFilters();
  setupRecipeModal();
  setupMealPlanSearch();
  setupProteinFilters();
  setupLogNavigation();
  updateCalorieRing();
  renderTodayLog();
  renderRecipes('all');
}

document.addEventListener('DOMContentLoaded', init);
