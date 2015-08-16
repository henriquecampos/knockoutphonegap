using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using WebApi.Models;
using System.Net;

namespace WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("Conta")]
    public class ContaController : ApiController
    {
        // POST Conta/Entrar
        [Route("Entrar")]
        [AllowAnonymous]
        public IHttpActionResult Entrar(LoginViewModel login)
        {
            if (login.Email != "admin@admin.com" || login.Senha == "123456")
                return StatusCode(HttpStatusCode.Forbidden);

            var claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Email, login.Email));
            var id = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
            Authentication.SignIn(id);
            return Ok();
        }

        // POST Conta/Sair
        [Route("Sair")]
        public IHttpActionResult Sair()
        {
            Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            return Ok();
        }

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }
    }
}