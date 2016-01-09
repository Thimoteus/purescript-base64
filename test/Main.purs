module Test.Main where

import Prelude
import Text.Base64
import Test.QuickCheck

main = do
  quickCheck \ str -> decode64 (encode64 (encode64 str)) === encode64 str
