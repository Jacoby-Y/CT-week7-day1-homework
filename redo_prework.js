// # Question 1
// def hello_name(user_name):
// 	print(f"hello_{user_name}")

const helloName = (name)=>{
    console.log(`Hello ${name}`)
}

// # Question 2
// def first_odds():
// 	for i in range(100):
// 		if i % 2 != 0:
// 			print(i)

const hundredOdds = ()=>{
    for (let i = 0; i < 100; i += 2) {
        console.log(i)
    }
}

// # Question 3
// def max_num_in_list(a_list: list[int]):
// 	max = a_list[0]
// 	if not isinstance(max, int): 
// 		print("!!-- List must be <list[int]>")
// 		return
// 	for i in a_list[1:]:
// 		if not isinstance(i, int): 
// 			print("!!-- List must be <list[int]>")
// 			return
// 		if i > max:
// 			max = i
// 	return max

const maxInList = (list)=>{
    return Math.max(...list);
}

// # Question 4
// def is_leap_year(year: int):
// 	if not isinstance(year, int): 
// 		print("!!-- Year must be <int>")
// 		return
// 	return not(year % 100 == 0 and year % 400 != 0) and (year % 4 == 0)

const isLeapYear = (year)=>{
    return !(year % 100 == 0 && year % 400 != 0) && (year % 4 == 0)
}

// # Question 5
// def is_consecutive(a_list: list[int]):
// 	last = a_list[0]
// 	if not isinstance(last, int): 
// 		print("!!-- List must be <list[int]>")
// 		return
// 	for i in a_list[1:]:
// 		if not isinstance(i, int): 
// 			print("!!-- List must be <list[int]>")
// 			return
// 		if last+1 != i:
// 			return False
// 		last = i
// 	return True

const isConsecutive = (list)=>{
    for (let i = 1; i < list.length; i++) {
        if (list[i-1] + 1 != list[i]) return false
    }
    return true
}