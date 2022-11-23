import time
from selenium import webdriver
from selenium.webdriver.common.by import By



def main():
    driver = webdriver.Chrome(executable_path=r"C:\Users\YVONNE\Downloads\chromedriver_win32 (2)/chromedriver.exe")
    driver.get("https://academy.testifyltd.com/")

    explore_course = driver.find_element(By.XPATH, '//*[@id="__next"]/main/section[1]/div/div/div[1]/div/button/span[1]')
    print("Explore Courses:", explore_course.text)
    driver.close()

main()
