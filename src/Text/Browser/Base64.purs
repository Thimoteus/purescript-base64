module Text.Browser.Base64 (
  Base64(),
  decode64,
  encode64
  ) where

type Base64 = String

foreign import decode64 :: Base64 -> String
foreign import encode64 :: String -> Base64
