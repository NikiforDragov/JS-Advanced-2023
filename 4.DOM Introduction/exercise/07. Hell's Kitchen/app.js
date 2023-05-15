function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const bestRestaurantsP = document.querySelector('#bestRestaurant p');
   const bestWorkersP = document.querySelector('#workers p');

   function onClick() {
      const arr = JSON.parse(input.value);
      const restaurants = {};

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const restaurantName = tokens[0];
         const workersArray = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArray) {
            const workerData = worker.split(' ');
            const workerName = workerData[0];
            const salary = Number(workerData[1]);

            workers.push({ workerName, salary });
         }

         if (restaurants[restaurantName]) {
            workers = workers.concat(restaurants[restaurantName].workers)
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length

         restaurants[restaurantName] = {
            workers,
            avgSalary,
            bestSalary,
         }
      })

      let bestRestaurantSalary = 0;
      let best = undefined;

      for (const restaurantName in restaurants) {
         if (restaurants[restaurantName].avgSalary > bestRestaurantSalary) {
            bestRestaurantSalary = restaurants[restaurantName].avgSalary
            best = { restaurantName, ...restaurants[restaurantName] }
         }
      }

      bestRestaurantsP.textContent = `Name: ${best.restaurantName} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`

      let workersResult = [];

      best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.workerName} With Salary: ${worker.salary}`)
      })

      bestWorkersP.innerText = workersResult.join(' ');
   }
}