#include<bits/stdc++.h>
using namespace std;
int findMinimumCost(vector<vector<int>> A, int index, int prevColour, vector<vector<int>> &dp){
    if (index >= A.size()){
        return 0;
    }

    cout << index << " " << prevColour << " " << dp[index][prevColour] << endl;

    if (dp[index][prevColour] != -1 && prevColour != -1) return dp[index][prevColour];

    if (prevColour == -1){
        int ans1 = A[index][1] + findMinimumCost(A, index+1, 1, dp);
        int ans2 = A[index][2] + findMinimumCost(A, index+1, 2, dp);
        int ans3 = A[index][0] + findMinimumCost(A, index+1, 0, dp);

        return min(ans1, min(ans2, ans3));
        // return dp[index][prevColour];
    }

    if (prevColour == 0){
        int ans1 = A[index][1] + findMinimumCost(A, index+1, 1, dp);
        int ans2 = A[index][2] + findMinimumCost(A, index+1, 2, dp);

        dp[index][prevColour] = min(ans1, ans2);
        return dp[index][prevColour];
    }else if (prevColour == 1){
        int ans1 = A[index][0] + findMinimumCost(A, index+1, 0, dp);
        int ans2 = A[index][2] + findMinimumCost(A, index+1, 2, dp);

        dp[index][prevColour] = min(ans1, ans2);
        return dp[index][prevColour];
    }else{
        int ans1 = A[index][1] + findMinimumCost(A, index+1, 1, dp);
        int ans2 = A[index][0] + findMinimumCost(A, index+1, 0, dp);

        dp[index][prevColour] = min(ans1, ans2);
        return dp[index][prevColour];
    }
}

int main() {

    int r, c;
    cin >> r >> c;

    vector<vector<int>> arr(r, vector<int> (c, -1));

    for (int i = 0; i < r; i++){
        for (int j = 0 ; j < c; j++){
            cin >> arr[i][j];
        }
    }
    vector<vector<int>> dp(r+1, vector<int> (c+1, -1));

    cout << findMinimumCost(arr, 0, -1, dp);

    // int ti = 0;

    // while (ti< t){
    //     int a;
    // }

    return 0;
}
