def DubbleSort(array):
    for i in range(0,len(array)):
        for j in range(0,len(array)-1):
            if(array[j]>array[j+1]):
                temp = array[j+1]
                array[j+1] = array[i]
                array[i] = temp
    return array            

def Recursive(array,i,j,n):
    if(i==n):
        return array
    if(j==n):
         print(i) 
         j=0
         i = i +1
    if(array[j]>array[j+1]):
            temp = array[j+1]
            array[j+1] = array[i]
            array[i] = temp
    Recursive(array,i,j+1,n)            
                
               
    



array = [2,1,3,3,3,3] 
print(DubbleSort(array))
array2 = [2,1,0,5,0,-1] 
print(array2)
print(Recursive(array2,0,0,len(array2)-1))
print(array2)

       
 