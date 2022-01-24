def selection_sort(arr)
  n=arr.length
 for i in 0...n 
  min=i
  for j in (i+1)...n
      if arr[j]<arr[min]
          temp=arr[j]
          arr[j]=arr[min]
          arr[min]=temp
      end
  end
 end
 return arr
end

def selection_sort(arr)
  sorted = []

  until arr.length == 0
    min = arr.min
    idx = arr.index(min)
    sorted << min
    arr.delete_at(idx)
  end

  sorted
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution

#https://rubyalgo.github.io/algorithms/sorting/selection-sort/